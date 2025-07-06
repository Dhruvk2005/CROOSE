'use client';

import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
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
          getAllServices()
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

  const renderTableRows = () => {
    return data[activeTab].map((item: any) => (
      <tr key={item.id || item.name} className="hover:bg-gray-50 border-b border-[#EAECF0]">
        <td className="px-4 py-3">{item.name}</td>
        <td className="px-4 py-3">{item.category}</td>
        <td className="px-4 py-3">{item.price}</td>
        {activeTab === 'products' ? (
          <>
            <td className="px-4 py-3">{item.type}</td>
            <td className="px-4 py-3">{item.unit}</td>
          </>
        ) : (
          <>
            <td className="px-4 py-3">{item.duration_minutes} mins</td>
            <td className="px-4 py-3">{item.type}</td>
          </>
        )}
        <td className="px-4 py-3">{item.createdAt || '-'}</td>
      </tr>
    ));
  };

  return (
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
            className={`px-4 py-2 rounded ${activeTab === 'services' ? 'bg-[#685BC7]  text-white' : 'bg-gray-200'}`}
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
              </>
            ) : (
              <>
                <th className="px-4 py-2">Duration</th>
                <th className="px-4 py-2">Type</th>
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
                <option value="Shampoo">Shampoo</option>
                <option value="Hair Oil">Hair Oil</option>
                <option value="Facewash">Facewash</option>

              </select>
              <input value={formState.price} onChange={(e) => setFormState(f => ({ ...f, price: e.target.value }))} type="text" placeholder="Price" required className="border p-2 rounded" />
              <select
                value={formState.type}
                onChange={(e) => setFormState(f => ({ ...f, type: e.target.value }))}
                className="border p-2 rounded"
                required
              >
                <option value="">Select Type</option>
                {activeTab === 'services' ? (
                  <>
                    <option value="in_store">In Store</option>
                    <option value="at_home">At Home</option>
                    <option value="virtual">Virtual</option>
                  </>
                ) : (
                  <>
                    <option value="physical">Physical</option>
                    <option value="bundle">Bundle</option>
                    <option value="custom">Custom</option>
                  </>
                )}
              </select>


              {activeTab === 'products' && (
                <input value={formState.unit} onChange={(e) => setFormState(f => ({ ...f, unit: e.target.value }))} type="text" placeholder="Unit" className="border p-2 rounded" />
              )}
              <input value={formState.description} onChange={(e) => setFormState(f => ({ ...f, description: e.target.value }))} type="text" placeholder="Description" className="border p-2 rounded col-span-2" />
              {activeTab === 'services' && (
                <input value={formState.duration} onChange={(e) => setFormState(f => ({ ...f, duration: e.target.value }))} type="text" placeholder="Duration (minutes)" className="border p-2 rounded" />
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
