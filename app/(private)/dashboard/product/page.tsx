"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";

const initialData = {
  products: [
    {
      id: 1,
      name: "Toothbrush",
      category: "Oral Care",
      price: "$5.99",
      stock: 120,
      createdAt: "2025-07-01",
    },
  ],
  services: [
    {
      id: 1,
      name: "Teeth Whitening",
      category: "Cosmetic Dentistry",
      duration: "45 mins",
      price: "$150",
      createdAt: "2025-07-02",
    },
  ],
};

const ProductServiceTabs = () => {
  const [activeTab, setActiveTab] = useState("products");
  const [data, setData] = useState<any>(initialData);
  const [showModal, setShowModal] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    duration: "",
  });

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      name: formState.name,
      category: formState.category,
      price: formState.price,
      createdAt: new Date().toISOString().split("T")[0],
      ...(activeTab === "products"
        ? { stock: Number(formState.stock) }
        : { duration: formState.duration }),
    };

    setData((prev:any) => ({
      ...prev,
      [activeTab]: [newItem, ...prev[activeTab]],
    }));
    setFormState({ name: "", category: "", price: "", stock: "", duration: "" });
    setShowModal(false);
  };

  return (
    <div>
       <div className='w-[100%] h-[64px] flex justify-between items-center' style={{borderBottom:"1px solid #EAECF0"}}>
                    <div className='flex items-center  gap-[20px] text-[#121217] '>
                      <span className='font-semi font-bold text-[20px] pl-[20px] ml-[10px]' >Products and Services</span>
            
                    </div>
                    <div className='mr-[20px]' >
                      <li className='flex w-[98px] gap-[23px] justify-center items-center '>
                        <div className='w-[46px] flex gap-[10px] border-r-[2px]  border-[#F2F4F7]' >
                          <Icon icon="mynaui:search" width="24" height="24" style={{ color: '#000' }} />
                        </div>
                        <div className='w-[16px] flex gap-[10px]'>
                          <svg width="24" height="20" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.99255 15.0123C10.3499 16.346 9.55845 17.7168 8.22478 18.0742C6.89112 18.4315 5.52028 17.6401 5.16292 16.3064M7.07633 4.78404C7.32983 4.32796 7.41334 3.77671 7.26762 3.23288C6.96983 2.12149 5.82746 1.46194 4.71607 1.75974C3.60468 2.05753 2.94514 3.1999 3.24293 4.31129C3.38865 4.85512 3.73659 5.29076 4.18418 5.55899M11.53 7.87107C11.2325 6.76096 10.4384 5.83266 9.32236 5.29038C8.2063 4.74811 6.8597 4.63627 5.5788 4.97949C4.2979 5.32271 3.18763 6.09285 2.49223 7.12051C1.79683 8.14817 1.57327 9.34915 1.87072 10.4593C2.36287 12.296 2.2673 13.7613 1.95651 14.8747C1.60229 16.1438 1.42518 16.7783 1.47302 16.9057C1.52777 17.0515 1.56737 17.0915 1.71256 17.1478C1.83947 17.1969 2.37261 17.0541 3.4389 16.7684L13.3265 14.119C14.3927 13.8333 14.9259 13.6904 15.0112 13.5844C15.1088 13.4631 15.1231 13.4086 15.0976 13.255C15.0754 13.1208 14.6047 12.6598 13.6634 11.7379C12.8375 10.929 12.0221 9.70778 11.53 7.87107Z" stroke="#101828" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
            
                      </li>
            
                    </div>
            
            
                  </div>

    
    <div className="p-6">
      {/* Tabs */}
      <div className="flex  gap-4 mb-4 border-b border-[#EAECF0]">
        {[
          { label: "Products", value: "products" },
          { label: "Services", value: "services" },
        ].map((tab) => (
          <button
            key={tab.value}
            className={`pb-2 px-3 text-sm font-medium border-b-2 ${
              activeTab === tab.value ? "border-[#685BC7] text-[#685BC7]" : "border-transparent text-gray-500"
            }`}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.label}
          </button>
        ))}
        <button
          onClick={() => setShowModal(true)}
          className="ml-auto mb-[5px] bg-[#685BC7] text-white px-4 py-2 rounded-md text-sm hover:bg-[#685BC7]-700"
        >
          Add {activeTab === "products" ? "Product" : "Service"}
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg border border-[#EAECF0] shadow-sm">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Category</th>
              {activeTab === "products" ? (
                <>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Stock</th>
                </>
              ) : (
                <>
                  <th className="px-4 py-3">Duration</th>
                  <th className="px-4 py-3">Price</th>
                </>
              )}
              <th className="px-4 py-3">Created At</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data[activeTab].map((item:any) => (
              <tr key={item.id} className="hover:bg-gray-50 border-b border-[#EAECF0]">
                <td className="px-4 py-3">{item.name}</td>
                <td className="px-4 py-3">{item.category}</td>
                {activeTab === "products" ? (
                  <>
                    <td className="px-4 py-3">{item.price}</td>
                    <td className="px-4 py-3">{item.stock}</td>
                  </>
                ) : (
                  <>
                    <td className="px-4 py-3">{item.duration}</td>
                    <td className="px-4 py-3">{item.price}</td>
                  </>
                )}
                <td className="px-4 py-3">{item.createdAt}</td>
                <td className="px-4 py-3">
                  <button className="text-gray-600 hover:text-black">
                    <Icon icon="bi:three-dots-vertical" />
                  </button>
                </td>
              </tr>
            ))}
            {data[activeTab].length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-6 text-gray-400">
                  No {activeTab} found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <h3 className="text-lg font-semibold mb-4">Add {activeTab === "products" ? "Product" : "Service"}</h3>
            <form onSubmit={handleAddItem} className="space-y-4">
              <input
                required
                value={formState.name}
                onChange={(e) => setFormState((f) => ({ ...f, name: e.target.value }))}
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 p-2 rounded-md"
              />
              <input
                required
                value={formState.category}
                onChange={(e) => setFormState((f) => ({ ...f, category: e.target.value }))}
                type="text"
                placeholder="Category"
                className="w-full border border-gray-300 p-2 rounded-md"
              />
              {activeTab === "products" ? (
                <>
                  <input
                    required
                    value={formState.price}
                    onChange={(e) => setFormState((f) => ({ ...f, price: e.target.value }))}
                    type="text"
                    placeholder="Price"
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                  <input
                    required
                    value={formState.stock}
                    onChange={(e) => setFormState((f) => ({ ...f, stock: e.target.value }))}
                    type="number"
                    placeholder="Stock"
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                </>
              ) : (
                <>
                  <input
                    required
                    value={formState.duration}
                    onChange={(e) => setFormState((f) => ({ ...f, duration: e.target.value }))}
                    type="text"
                    placeholder="Duration"
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                  <input
                    required
                    value={formState.price}
                    onChange={(e) => setFormState((f) => ({ ...f, price: e.target.value }))}
                    type="text"
                    placeholder="Price"
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                </>
              )}
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-200 rounded-md"
                >
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-[#685BC7] text-white rounded-md">
                  Save
                </button>
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
