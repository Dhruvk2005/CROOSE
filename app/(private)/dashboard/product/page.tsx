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
    sku: '',
    image: '',
    tags: '',
    buffer_minutes: '',
    available_days: '',
    ai_tags: '',
    is_featured: false,
    is_active: true,
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
          sku: formState.sku,
          image: formState.image,
          is_featured: formState.is_featured,
          is_active: formState.is_active,
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
          is_featured: formState.is_featured,
          is_active: formState.is_active,
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
        sku: '',
        image: '',
        tags: '',
        buffer_minutes: '',
        available_days: '',
        ai_tags: '',
        is_featured: false,
        is_active: true,
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
            <td className="px-4 py-3">{item.sku}</td>
            <td className="px-4 py-3">{item.image || '-'}</td>
            <td className="px-4 py-3">{item.tags || '-'}</td>
            <td className="px-4 py-3">{item.is_featured ? 'Yes' : 'No'}</td>
            <td className="px-4 py-3">{item.is_active ? 'Active' : 'Inactive'}</td>
          </>
        ) : (
          <>
            <td className="px-4 py-3">{item.duration_minutes} mins</td>
            <td className="px-4 py-3">{item.type}</td>
            <td className="px-4 py-3">{item.unit || '-'}</td>
            <td className="px-4 py-3">{item.buffer_minutes || '-'}</td>
            <td className="px-4 py-3">{(item.available_days || []).join(', ')}</td>
            <td className="px-4 py-3">{(item.ai_tags || []).join(', ')}</td>
            <td className="px-4 py-3">{item.is_featured ? 'Yes' : 'No'}</td>
            <td className="px-4 py-3">{item.is_active ? 'Active' : 'Inactive'}</td>
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
            <button
              className={`px-4 py-2 rounded ${activeTab === 'products' ? 'bg-[#685BC7] text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveTab('products')}
            >
              Products
            </button>
            <button
              className={`px-4 py-2 rounded ${activeTab === 'services' ? 'bg-[#685BC7] text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveTab('services')}
            >
              Services
            </button>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#685BC7] text-white px-4 py-2 rounded"
          >
            Add {activeTab === 'products' ? 'Product' : 'Service'}
          </button>
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
                  <th className="px-4 py-2">SKU</th>
                  <th className="px-4 py-2">Image</th>
                  <th className="px-4 py-2">Tags</th>
                  <th className="px-4 py-2">Featured</th>
                  <th className="px-4 py-2">Status</th>
                </>
              ) : (
                <>
                  <th className="px-4 py-2">Duration</th>
                  <th className="px-4 py-2">Type</th>
                  <th className="px-4 py-2">Unit</th>
                  <th className="px-4 py-2">Buffer</th>
                  <th className="px-4 py-2">Available Days</th>
                  <th className="px-4 py-2">AI Tags</th>
                  <th className="px-4 py-2">Featured</th>
                  <th className="px-4 py-2">Status</th>
                </>
              )}
              <th className="px-4 py-2">Created</th>
            </tr>
          </thead>
          <tbody>
            {renderTableRows()}
          </tbody>
        </table>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-6 relative">
              <h3 className="text-lg font-semibold mb-4">Add {activeTab === 'products' ? 'Product' : 'Service'}</h3>
              <form onSubmit={handleAddItem} className="grid grid-cols-2 gap-4">
                <input value={formState.name} onChange={(e) => setFormState(f => ({ ...f, name: e.target.value }))} type="text" placeholder="Name" required className="border p-2 rounded" />
                <select value={formState.category} onChange={(e) => setFormState(f => ({ ...f, category: e.target.value }))} className="border p-2 rounded" required>
                  <option value="">Select category</option>
                  {activeTab === 'products'
                    ? productCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)
                    : [
                      <option key="Wellness" value="Wellness">Wellness</option>,
                      <option key="Spa" value="Spa">Spa</option>,
                      <option key="Yoga" value="Yoga">Yoga</option>
                    ]}
                </select>
                <input value={formState.price} onChange={(e) => setFormState(f => ({ ...f, price: e.target.value }))} type="text" placeholder="Price" required className="border p-2 rounded" />
                <select value={formState.type} onChange={(e) => setFormState(f => ({ ...f, type: e.target.value }))} className="border p-2 rounded" required>
                  <option value="">Select Type</option>
                  {activeTab === 'services'
                    ? [
                      <option key="in_store" value="in_store">In Store</option>,
                      <option key="at_home" value="at_home">At Home</option>,
                      <option key="virtual" value="virtual">Virtual</option>
                    ]
                    : productTypes.map(type => <option key={type} value={type}>{type}</option>)}
                </select>
                {activeTab === 'products' && (
                  <>
                    <input value={formState.unit} onChange={(e) => setFormState(f => ({ ...f, unit: e.target.value }))} type="text" placeholder="Unit" className="border p-2 rounded" />
                    <input value={formState.stock} onChange={(e) => setFormState(f => ({ ...f, stock: e.target.value }))} type="text" placeholder="Stock" className="border p-2 rounded" />
                    <input value={formState.sku} onChange={(e) => setFormState(f => ({ ...f, sku: e.target.value }))} type="text" placeholder="SKU" className="border p-2 rounded" />
                    <input value={formState.image} onChange={(e) => setFormState(f => ({ ...f, image: e.target.value }))} type="text" placeholder="Image URL" className="border p-2 rounded" />
                    <input value={formState.tags} onChange={(e) => setFormState(f => ({ ...f, tags: e.target.value }))} type="text" placeholder="Tags" className="border p-2 rounded col-span-2" />
                  </>
                )}

                <input value={formState.description} onChange={(e) => setFormState(f => ({ ...f, description: e.target.value }))} type="text" placeholder="Description" className="border p-2 rounded col-span-2" />

                {activeTab === 'services' && (
                  <>
                    <input value={formState.duration} onChange={(e) => setFormState(f => ({ ...f, duration: e.target.value }))} type="text" placeholder="Duration (minutes)" className="border p-2 rounded" />
                    <input value={formState.unit} onChange={(e) => setFormState(f => ({ ...f, unit: e.target.value }))} type="text" placeholder="Unit (e.g., minutes)" className="border p-2 rounded" />
                    <input value={formState.buffer_minutes} onChange={(e) => setFormState(f => ({ ...f, buffer_minutes: e.target.value }))} type="number" placeholder="Buffer Minutes" className="border p-2 rounded" />
                    <input value={formState.available_days} onChange={(e) => setFormState(f => ({ ...f, available_days: e.target.value }))} type="text" placeholder="Available Days (e.g., monday,wednesday)" className="border p-2 rounded col-span-2" />
                    <input value={formState.ai_tags} onChange={(e) => setFormState(f => ({ ...f, ai_tags: e.target.value }))} type="text" placeholder="AI Tags (comma separated)" className="border p-2 rounded col-span-2" />
                  </>
                )}

                <label className="col-span-1 flex items-center gap-2">
                  <input type="checkbox" checked={formState.is_featured} onChange={(e) => setFormState(f => ({ ...f, is_featured: e.target.checked }))} />
                  Featured
                </label>
                <label className="col-span-1 flex items-center gap-2">
                  <input type="checkbox" checked={formState.is_active} onChange={(e) => setFormState(f => ({ ...f, is_active: e.target.checked }))} />
                  Active
                </label>

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
