'use client';

import React, { useState, useEffect } from 'react';
import { addProduct, addServices, getAllProducts, getAllServices, GetSpaceId } from '@/app/Apis/publicapi';

const initialData = {
  products: [],
  services: [],
};

const ProductServiceTabs = () => {
  const [activeTab, setActiveTab] = useState<'products' | 'services'>('products');
  const [data, setData] = useState<any>(initialData);
  const [spaces, setSpaces] = useState<{ id: number; name: string }[]>([]);

const [selectedSpaceId, setSelectedSpaceId] = useState('');
 const [error, setError] = useState<string | null>(null);
const [showModal, setShowModal] = useState(false);
  const [formState, setFormState] = useState({
    space_id: '',
    name: '',
    category: '',
    price: '',
    stock: '',
    duration: '',
    description: '',
    unit: '',
    type: '',
    image: null as File | null,
    buffer_minutes: '',
    available_days: '',
    ai_tags: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productList, serviceList] = await Promise.all([
          getAllProducts(),
          getAllServices(),
        ]);
        setData({
          products: productList?.data || [],
          services: serviceList?.data || [],
        });
      } catch (err) {
        console.error('Failed to fetch data', err);
      }
    };

    fetchData();
  }, []);

useEffect(() => {
  const GetSpaceID = async () => {
    try {
      const res = await GetSpaceId(); // this returns { data: [ spaces ] }
      const spaceArray = res?.spaces;
      //res?.data?.spaces || res?.data;
      // Log it to confirm at runtime
      console.log("Fetched space list:", spaceArray);

      if (!Array.isArray(spaceArray)) {
        console.warn("Expected array response but got:", spaceArray);
        return;
      }

      const simplified = spaceArray.map((item: any) => ({
        id: item.id,        // Ensure it's a string for use inside dropdown `value`
        name: item.name
      }));

      setSpaces(simplified);
    } catch (err) {
      console.error("Failed to load space IDs", err);
    }
  };

  GetSpaceID();
}, []);


  

  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      let normalized: any;

      if (activeTab === 'products') {
        const formData = new FormData();
        formData.append('space_id' , formState.space_id);
        formData.append('name', formState.name);
        formData.append('description', formState.description);
        formData.append('price', formState.price);
        formData.append('category', formState.category);
        formData.append('type', formState.type || 'physical');
        // formData.append('unit', formState.unit);
        formData.append('stock', formState.stock);
        if (formState.image instanceof File) {
          formData.append('image', formState.image);
        }
// ↳ right above addProduct/addServices
console.log('payload space_id →', formState.space_id);

        const added = await addProduct(formData);
        normalized = {
          ...added,
          space_id : formState.space_id,
          name: formState.name,
          description: formState.description,
          price: formState.price,
          category: formState.category,
          // type: formState.type || 'physical',
          // unit: formState.unit,
          stock: formState.stock,
          // createdAt: added.created_at || new Date().toISOString(),
          image: added.image_url || null,
        };
      } else {
        const serviceData = {
           space_id : formState.space_id,
          name: formState.name,
          description: formState.description,
          duration_minutes: parseInt(formState.duration),
          price: parseFloat(formState.price),
          category: formState.category,
          // type: formState.type,
          // unit: formState.unit,
          buffer_minutes: parseInt(formState.buffer_minutes),
          available_days: formState.available_days
            .split(',')
            .map(day => day.trim().toLowerCase()),
          ai_tags: formState.ai_tags
            .split(',')
            .map(tag => tag.trim()),
        };

console.log(serviceData);
        const added = await addServices(serviceData);
        normalized = {
          ...added,
          ...(formState.space_id && { space_id: formState.space_id }),
          //createdAt: added.created_at || new Date().toISOString(),
        };
      }

      // Push into products or services based on active tab
      if (activeTab === 'products') {
        setData((prev: any) => ({
          ...prev,
          products: [normalized, ...prev.products],
        }));
      } else {
        setData((prev: any) => ({
          ...prev,
          services: [normalized, ...prev.services],
        }));
      }

      setFormState({
        space_id: '',
        name: '',
        category: '',
        price: '',
        stock: '',
        duration: '',
        description: '',
        unit: '',
        type: '',
        image: null,
        buffer_minutes: '',
        available_days: '',
        ai_tags: '',
      });

      setShowModal(false);
    } catch (err: any) {
      alert(err?.response?.data?.message || err.message || 'Failed to add item.');
    }
  };

  const productCategories = [
    "Wigs", "Hair Extensions", "Hair Care Products", "Styling Tools & Accessories", "Makeup",
    "Skincare", "Fragrances & Body Care", "Appointments & Services", "Bundles & Combos",
    "Merch & Apparel"
  ];

  const productTypes = [
    "Wigs", "Extensions", "Oils", "Brushes", "Custom Wigs", "Braids", "Haircuts", "Facials",
    "Makeup", "Skincare", "Beard Care", "Ponytails", "Closures", "Tape-ins", "Shaving",
    "Hair Coloring", "Retouching", "Dreadlocks", "Cornrows", "Nails", "Pedicure", "Manicure",
    "Loc Maintenance", "Styling Tools", "Bonnets", "Edge Control", "Mousse", "Shampoo",
    "Conditioner", "Body Butter", "Lip Gloss", "Foundation", "Lashes", "Appointments",
    "Consultations", "Gift Cards", "Bundles", "Accessories", "Clippers", "Durags",
    "Wave Caps", "Dye Kits", "Detanglers"
  ];

  const renderTableRows = () => {
    const items = activeTab === 'products' ? data.products : data.services;
    return items.map((item: any, idx: number) => (
      <tr key={item.id || item.name + idx} className="hover:bg-gray-50 border-b border-[#EAECF0]">
        <td className="px-4 py-3">{item.space_id}</td>
        <td className="px-4 py-3">{item.name}</td>
        <td className="px-4 py-3">{item.category}</td>
        <td className="px-4 py-3">{item.price}</td>
        {/* <td className="px-4 py-3">{item.type}</td> */}
        {/* <td className="px-4 py-3">{item.unit || '-'}</td> */}
        <td className="px-4 py-3">{item.stock || '-'}</td>
        {activeTab === 'services' && (
          <>
            <td className="px-4 py-3">{item.duration_minutes ? `${item.duration_minutes} mins` : '-'}</td>
            {/* <td className="px-4 py-3">{item.buffer_minutes || '-'}</td> */}
            <td className="px-4 py-3">{(item.available_days || []).join(', ')}</td>
            {/* <td className="px-4 py-3">{(item.ai_tags || []).join(', ')}</td> */}
          </>
        )}
        <td className="px-4 py-3">
          {item.image ? (
            <img src={item.image} alt="" className="w-10 h-10 object-cover" />
          ) : '-'}
        </td>
        {/* <td className="px-4 py-3">{item.createdAt || item.created_at || '-'}</td> */}
      </tr>
    ));
  };
 
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <button className={`px-4 py-2 rounded ${activeTab === 'products' ? 'bg-[#685BC7] text-white' : 'bg-gray-200'}`} onClick={() => setActiveTab('products')}>Products</button>
          <button className={`px-4 py-2 rounded ${activeTab === 'services' ? 'bg-[#685BC7] text-white' : 'bg-gray-200'}`} onClick={() => setActiveTab('services')}>Services</button>
        </div>
        <div className='flex gap-2'>
          <button onClick={() => setShowModal(true)} className="bg-[#685BC7] text-white px-4 py-2 rounded">Add {activeTab === 'products' ? 'Product' : 'Service'}</button>
          <button className="bg-[#32CD32] text-white px-4 py-2 rounded">Use Excel Sheet</button>
        </div>
      </div>

      <table className="w-full text-sm text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Space Id</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Price</th>
          
            {/* <th className="px-4 py-2">Type</th> */}
            {/* <th className="px-4 py-2">Unit</th> */}
            

                     {activeTab === 'products' && (
              <>
                 <th className="px-4 py-2">Stock</th> 
                {/* <th className="px-4 py-2">Buffer</th> */}
                <th className="px-4 py-2">Image</th>
                {/* <th className="px-4 py-2">AI Tags</th> */}
              </>
            )}
            


            {activeTab === 'services' && (
              <>
                <th className="px-4 py-2">Duration</th>
                {/* <th className="px-4 py-2">Buffer</th> */}
                <th className="px-4 py-2">Available Days</th>
                {/* <th className="px-4 py-2">AI Tags</th> */}
              </>
            )}
            
            {/* <th className="px-4 py-2">Created</th> */}
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>

      {showModal && (
        <div className="fixed inset-0 bg-[#9999] bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-xl max-h-[90vh] overflow-y-auto p-6 relative">
            <h3 className="text-lg font-semibold mb-4">Add {activeTab === 'products' ? 'Product' : 'Service'}</h3>
            <form onSubmit={handleAddItem} className="grid grid-cols-2 gap-4">
 <select
  className="col-span-2 border px-3 py-2"
  value={formState.space_id}
  onChange={(e) => {
    const space_id = e.target.value;
    const selectedSpace = spaces.find((s) => String(s.id) === space_id);
    setFormState((f) => ({
      ...f,
      space_id,
      name: selectedSpace?.name || ''
    }));
  }}
>
  <option value="">Select Space ID</option>
  {spaces.map((space) => (
    <option key={space.id} value={String(space.id)}>
      {space.id}
    </option>
  ))}
</select>

<label className="col-span-2">
  <span>Name</span>
  <input
    value={formState.name}
    onChange={(e) =>
      setFormState((f) => ({ ...f, name: e.target.value }))
    }
    type="text"
    required
    className="border p-2 rounded w-full mt-1"
  />
</label>

              <label>
                <span>Category</span>
                <select value={formState.category} onChange={(e) => setFormState(f => ({ ...f, category: e.target.value }))} className="border p-2 rounded w-full mt-1" required>
                  <option value="">Select category</option>
                  {activeTab === 'products'
                    ? productCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)
                    : ['in_store', 'at_home', 'virtual'].map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
              </label>
              {/* in_store,at_home,virtual */}
              <label>
                <span>Price</span>
                <input value={formState.price} onChange={(e) => setFormState(f => ({ ...f, price: e.target.value }))} type="text" required className="border p-2 rounded w-full mt-1" />
              </label>
              {/* <label>
                <span>Type</span>
                <select value={formState.type} onChange={(e) => setFormState(f => ({ ...f, type: e.target.value }))} className="border p-2 rounded w-full mt-1" required>
                  <option value="">Select Type</option>
                  {activeTab === 'services'
                    ? ['in_store', 'at_home', 'virtual'].map(type => <option key={type} value={type}>{type}</option>)
                    : productTypes.map(type => <option key={type} value={type}>{type}</option>)}
                </select>
              </label> */}

              {activeTab === 'products' && (
                <>
                  {/* <label>
                    <span>Unit</span>
                    <input value={formState.unit} onChange={(e) => setFormState(f => ({ ...f, unit: e.target.value }))} type="text" className="border p-2 rounded w-full mt-1" />
                  </label> */}
                   <label>
                    <span>Stock</span>
                    <input value={formState.stock} onChange={(e) => setFormState(f => ({ ...f, stock: e.target.value }))} type="text" className="border p-2 rounded w-full mt-1" />
                  </label> 
                  <label className="col-span-2">
                    <span>Image</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setFormState(f => ({ ...f, image: file }));
                        }
                      }}
                      className="border p-2 rounded w-full mt-1"
                      required
                    />
                  </label>
                </>
              )}

              <label className="col-span-2">
                <span>Description</span>
                <input value={formState.description} onChange={(e) => setFormState(f => ({ ...f, description: e.target.value }))} type="text" className="border p-2 rounded w-full mt-1" />
              </label>

              {activeTab === 'services' && (
                <>
                  <label>
                    <span>Duration (minutes)</span>
                    <input value={formState.duration} onChange={(e) => setFormState(f => ({ ...f, duration: e.target.value }))} type="text" className="border p-2 rounded w-full mt-1" />
                  </label>
                  {/* <label>
                    <span>Unit</span>
                    <input value={formState.unit} onChange={(e) => setFormState(f => ({ ...f, unit: e.target.value }))} type="text" className="border p-2 rounded w-full mt-1" />
                  </label> */}
                  {/* <label>
                    <span>Buffer Minutes</span>
                    <input value={formState.buffer_minutes} onChange={(e) => setFormState(f => ({ ...f, buffer_minutes: e.target.value }))} type="number" className="border p-2 rounded w-full mt-1" />
                  </label> */}
                  <label className="col-span-2">
                    <span>Available Days (e.g., monday,wednesday)</span>
                    <input value={formState.available_days} onChange={(e) => setFormState(f => ({ ...f, available_days: e.target.value }))} type="text" className="border p-2 rounded w-full mt-1" />
                  </label>
                  {/* <label className="col-span-2">
                    <span>AI Tags (comma separated)</span>
                    <input value={formState.ai_tags} onChange={(e) => setFormState(f => ({ ...f, ai_tags: e.target.value }))} type="text" className="border p-2 rounded w-full mt-1" />
                  </label> */}
                </>
              )}

              <div className="col-span-2 flex justify-end gap-2 mt-4">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-200 rounded-md">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-[#685BC7] text-white rounded-md">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductServiceTabs;
