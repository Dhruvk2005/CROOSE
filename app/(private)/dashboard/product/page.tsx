'use client';

import React, { useState, useEffect } from 'react';
import { addProduct, addServices, getAllProducts, getAllServices } from '@/app/Apis/publicapi';

const initialData = {
  products: [],
  services: [],
};

const ProductServiceTabs = () => {
  const [activeTab, setActiveTab] = useState<'products' | 'services'>('products');
  const [data, setData] = useState<any>(initialData);
  const [showModal, setShowModal] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    duration: '',
    description: '',
    unit: '',
    type: '',
    image: '',
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
        setData({ products: productList?.data || [], services: serviceList?.data || [] });
      } catch (err) {
        console.error('Failed to fetch data', err);
      }
    };

    fetchData();
  }, []);

  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (activeTab === 'products') {
        const productData = {
          name: formState.name,
          description: formState.description,
          price: parseFloat(formState.price),
          category: formState.category,
          type: formState.type || 'physical',
          unit: formState.unit,
          stock: formState.stock,
          image: formState.image,
        };

        const added = await addProduct(productData);
        setData((prev: any) => ({
          ...prev,
          products: [added?.data || productData, ...prev.products],
        }));
      } else {
        const serviceData = {
          name: formState.name,
          description: formState.description,
          duration_minutes: parseInt(formState.duration),
          price: parseFloat(formState.price),
          category: formState.category,
          type: formState.type || 'custom',
          unit: formState.unit,
          buffer_minutes: parseInt(formState.buffer_minutes),
          available_days: formState.available_days.split(',').map(day => day.trim().toLowerCase()),
          ai_tags: formState.ai_tags.split(',').map(tag => tag.trim()),
        };

        const added = await addServices(serviceData);
        setData((prev: any) => ({
          ...prev,
          services: [added?.data || serviceData, ...prev.services],
        }));
      }

      setFormState({
        name: '',
        category: '',
        price: '',
        stock: '',
        duration: '',
        description: '',
        unit: '',
        type: '',
        image: '',
        buffer_minutes: '',
        available_days: '',
        ai_tags: '',
      });
      setShowModal(false);
    } catch (err: any) {
      alert(err.message || 'Failed to add item.');
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
    return data[activeTab].map((item: any, idx: number) => (
      <tr key={item.id || item.name + idx} className="hover:bg-gray-50 border-b border-[#EAECF0]">
        <td className="px-4 py-3">{item.name}</td>
        <td className="px-4 py-3">{item.category}</td>
        <td className="px-4 py-3">{item.price}</td>
        {activeTab === 'products' ? (
          <>
            <td className="px-4 py-3">{item.type}</td>
            <td className="px-4 py-3">{item.unit}</td>
            <td className="px-4 py-3">{item.stock}</td>
            <td className="px-4 py-3">{item.image || '-'}</td>
          </>
        ) : (
          <>
            <td className="px-4 py-3">{item.duration_minutes} mins</td>
            <td className="px-4 py-3">{item.type}</td>
            <td className="px-4 py-3">{item.unit || '-'}</td>
            <td className="px-4 py-3">{item.buffer_minutes || '-'}</td>
            <td className="px-4 py-3">{(item.available_days || []).join(', ')}</td>
            <td className="px-4 py-3">{(item.ai_tags || []).join(', ')}</td>
          </>
        )}
        <td className="px-4 py-3">{item.createdAt || '-'}</td>
      </tr>
    ));
  };

  return (
    <div className="p-4">
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
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Price</th>
              {activeTab === 'products' ? (
                <>
                  <th className="px-4 py-2">Type</th>
                  <th className="px-4 py-2">Unit</th>
                  <th className="px-4 py-2">Stock</th>
                  <th className="px-4 py-2">Image</th>
                </>
              ) : (
                <>
                  <th className="px-4 py-2">Duration</th>
                  <th className="px-4 py-2">Type</th>
                  <th className="px-4 py-2">Unit</th>
                  <th className="px-4 py-2">Buffer</th>
                  <th className="px-4 py-2">Available Days</th>
                  <th className="px-4 py-2">AI Tags</th>
                </>
              )}
              <th className="px-4 py-2">Created</th>
            </tr>
          </thead>
          <tbody>{renderTableRows()}</tbody>
        </table>

        {showModal && (
          <div className="fixed inset-0 bg-[#9999] bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-xl max-h-[90vh] overflow-y-auto p-6 relative">
              <h3 className="text-lg font-semibold mb-4">Add {activeTab === 'products' ? 'Product' : 'Service'}</h3>
              <form onSubmit={handleAddItem} className="grid grid-cols-2 gap-4">
               <label className="col-span-2">
                  <span>Name</span>
                  <input value={formState.name} onChange={(e) => setFormState(f => ({ ...f, name: e.target.value }))} type="text" required className="border p-2 rounded w-full mt-1" />
                </label>
                <label>
                  <span>Category</span>
                  <select value={formState.category} onChange={(e) => setFormState(f => ({ ...f, category: e.target.value }))} className="border p-2 rounded w-full mt-1" required>
                    <option value="">Select category</option>
                    {activeTab === 'products'
                      ? productCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)
                      : ['Wellness', 'Spa', 'Yoga'].map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                </label>
                <label>
                  <span>Price</span>
                  <input value={formState.price} onChange={(e) => setFormState(f => ({ ...f, price: e.target.value }))} type="text" required className="border p-2 rounded w-full mt-1" />
                </label>
                <label>
                  <span>Type</span>
                  <select value={formState.type} onChange={(e) => setFormState(f => ({ ...f, type: e.target.value }))} className="border p-2 rounded w-full mt-1" required>
                    <option value="">Select Type</option>
                    {activeTab === 'services'
                      ? ['in_store', 'at_home', 'virtual'].map(type => <option key={type} value={type}>{type}</option>)
                      : productTypes.map(type => <option key={type} value={type}>{type}</option>)}
                  </select>
                </label>

                {activeTab === 'products' && (
                  <>
                    <label>
                      <span>Unit</span>
                      <input value={formState.unit} onChange={(e) => setFormState(f => ({ ...f, unit: e.target.value }))} type="text" className="border p-2 rounded w-full mt-1" />
                    </label>
                    <label>
                      <span>Stock</span>
                      <input value={formState.stock} onChange={(e) => setFormState(f => ({ ...f, stock: e.target.value }))} type="text" className="border p-2 rounded w-full mt-1" />
                    </label>
                    <label className="col-span-2">
                      <span>Image URL</span>
                      <input value={formState.image} onChange={(e) => setFormState(f => ({ ...f, image: e.target.value }))} type="file" className="border p-2 rounded w-full mt-1" />
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
                    <label>
                      <span>Unit (e.g., minutes)</span>
                      <input value={formState.unit} onChange={(e) => setFormState(f => ({ ...f, unit: e.target.value }))} type="text" className="border p-2 rounded w-full mt-1" />
                    </label>
                    <label>
                      <span>Buffer Minutes</span>
                      <input value={formState.buffer_minutes} onChange={(e) => setFormState(f => ({ ...f, buffer_minutes: e.target.value }))} type="number" className="border p-2 rounded w-full mt-1" />
                    </label>
                    <label className="col-span-2">
                      <span>Available Days (e.g., monday,wednesday)</span>
                      <input value={formState.available_days} onChange={(e) => setFormState(f => ({ ...f, available_days: e.target.value }))} type="text" className="border p-2 rounded w-full mt-1" />
                    </label>
                    <label className="col-span-2">
                      <span>AI Tags (comma separated)</span>
                      <input value={formState.ai_tags} onChange={(e) => setFormState(f => ({ ...f, ai_tags: e.target.value }))} type="text" className="border p-2 rounded w-full mt-1" />
                    </label>
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
    </div>
  );
};

export default ProductServiceTabs;
