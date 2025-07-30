'use client';
import { Search, Bell, X } from 'lucide-react';
import { HiDotsVertical } from "react-icons/hi";
import axios from "axios";
import { Icon } from "@iconify/react";
import { toast } from 'react-toastify';
import Select from "react-select";
import React, { useState, useEffect, useRef } from 'react';
import { addProduct, addServices, deleteProduct, deleteService, getAllProducts, getAllServices, GetSpaceId, searchProducts, searchServices, updateProduct, updateServices, uploadBulkFile } from '@/app/Apis/publicapi';
import { FiSliders, FiExternalLink, FiSearch } from "react-icons/fi";

import Pagination from '../../components/pagination';
//import MultiSelectDays from './components/MultiSelectDays';
const initialData = {
  products: [],
  services: [],
};
const options = [
  { value: "monday", label: "Monday" },
  { value: "tuesday", label: "Tuesday" },
  { value: "wednesday", label: "Wednesday" },
  { value: "thursday", label: "Thursday" },
  { value: "friday", label: "Friday" },
  { value: "saturday", label: "Saturday" },
  { value: "sunday", label: "Sunday" }
];


const ProductServiceTabs = () => {
   const [menuOpen, setMenuOpen] = useState(false);
   const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [activeTab, setActiveTab] = useState<'products' | 'services'>('products');
  const [data, setData] = useState<any>(initialData);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

const [updatedata, setUpdateData] = useState({
  products: [],
  services: [],
});
const [searchTerm, setSearchTerm] = useState('');
const [searchdata, setSearchData] = useState([]);



  const [spaces, setSpaces] = useState<{ id: number; name: string }[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal,setShowDeleteModal] = useState(false);
  const [showBulkModal, setShowBulkModal] = useState(false);
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState({
    space_id: '',
    space_name: '',
    service_name: '',
    service_price: '',
    service_duration: '',
    service_category: '',
    product_name: '',
    product_id: '',
    service_id: '',
    product_price: '',
    product_stock: '',
    product_status: '',
name: '',
type:'',
stock: '',
price: '',
    status: '',
    unit: '',

    image: null as File | null,
 
    available_days: [] as string[],
 
  });

 const fetchItems = async (page: number = 1) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const url = `http://68.183.108.227/croose/public/index.php/api/${activeTab}?page=${page}`;
      
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      const data = await response.json();
      
      if (data.status) {
       
        setItems(data.data);
         setData((p :any ) =>{ return {
     
           [activeTab]: data?.data || [],
    //...data
        }});
        setTotalPages(data.meta.last_page);
        setTotalItems(data.meta.total);
      }
    } catch (error) {
      console.error(`Error fetching ${activeTab}:`, error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems(currentPage);
  }, [currentPage, activeTab]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (showBulkModal && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setModalPosition({
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX,
      });
    }
  }, [showBulkModal]);

  const templateUrl =
    activeTab === 'services'
      ? 'http://68.183.108.227/croose/public/storage/Bulk_upload_templates/new_services_template.xlsx'
      : 'http://68.183.108.227/croose/public/storage/Bulk_upload_templates/New_products_template.xlsx';

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
        const res = await GetSpaceId();
        const spaceArray = res?.spaces;
      

        if (!Array.isArray(spaceArray)) {
          console.warn("Expected array response but got:", spaceArray);
          return;
        }

        const simplified = spaceArray.map((item: any) => ({
          id: item.id,        
          name: item.name
        }));

        setSpaces(simplified);
      } catch (err) {
        console.error("Failed to load space IDs", err);
      }
    };
       GetSpaceID();
  }, []);

useEffect(() => {
  const delay = setTimeout(async () => {
    if (searchTerm.trim() === "") return;

    try {
      const result =
        activeTab === "products"
          ? await searchProducts(searchTerm)
          : await searchServices(searchTerm);

      if (result?.status) {
        // console.log(result ,"result191" );
        setItems(result.data);
      }
    } catch (err) {
      console.error("Search error:", err);
    }
  }, 400); 

  return () => clearTimeout(delay);
}, [searchTerm, activeTab]);



 
const [selectedFile, setSelectedFile] = useState<File | null>(null);
const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file) return;
  setSelectedFile(file);
  if (!formState.space_id) {toast.warn("Please select a Space Name before uploading.");
    return;
  }
};
const handleFileUpload = async () => {
  if (!selectedFile) {
    toast.warn("Please select a file first.");
    return;
  }
  if (!formState.space_id) {
    toast.warn("Please select a Space Name before uploading.");
    return;
  }
  try {
    await uploadBulkFile(selectedFile, activeTab, formState.space_id);
    toast.success("Upload Processing...");
    setShowBulkModal(false);
    setSelectedFile(null); // clear after upload
  } catch (err: any) {
    console.error("Upload failed:", err);
    toast.error(err.message || "Failed to upload file. Please check console for details.");
  }
};




const handleUpdateItem = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    let updated;

    if (activeTab === 'products') {
      const product_id = formState.product_id;
  const productData = {
      
        space_id: formState.space_id,
        name: formState.product_name,
  price: parseFloat(formState.product_price),
  stock:formState.product_stock,

}
  updated = await updateProduct(product_id ,productData); 
    } else {
       const service_id = formState.service_id;
      const serviceData = {
       
        space_id: formState.space_id,
        name: formState.service_name,
        duration_minutes: parseInt(formState.service_duration),
        price: parseFloat(formState.service_price),
        category: formState.service_category,

        available_days: formState.available_days.map((d: string) => d.trim().toLowerCase()),
      
      };


      updated = await updateServices(service_id ,serviceData); 
    }

    
    if (activeTab === 'products') {
      setData((prev: any) => ({
        ...prev,
        products: prev.products.map((p: any )=>
          p.product_id === formState.product_id
            ? { ...p, ...updated.data }
            : p
        )
      }));
    } else {
      setData((prev: any) => ({
        ...prev,
       services: prev.services.map((s: any )=>
          s.service_id === formState.service_id 
            ? { ...s, ...updated }
            : s
        )
      }));
    }
    setShowUpdateModal(false);
    toast.success('Updated successfully!');
  } catch (err: any) {
    toast.error(err?.response?.data?.message || err.message || 'Failed to update item.');
  }
};
  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let normalized: any;
      if (activeTab === 'products') {
        const formData = new FormData();
        formData.append('space_id', formState.space_id);
        // formData.append('space_name', formState.space_name);
        formData.append('name', formState.name);
        formData.append('type', formState.type);
      
        formData.append('price', formState.product_price);
   
        formData.append('stock', formState.product_stock);
        formData.append('stock', formState.product_stock);
        if (formState.image instanceof File) {
          formData.append('image', formState.image);
        }

       

        const added = await addProduct(formData);
        normalized = {
          ...added,
       
          name: formState.name,
 
          stock: formState.product_stock,
          price: formState.product_price,
          type: formState.type,
        
          image: added.image_url || null,
        };
      } else {

        const serviceData = {
       space_id:formState.space_id,
          name: formState.name,
      
          duration_minutes: parseInt(formState.service_duration),
          price: parseFloat(formState.service_price),
          category: formState.service_category,
       
    
          available_days: formState.available_days.map((day: string) => day.trim().toLowerCase()),

        
        };

     
        const added = await addServices(serviceData);
        normalized = {
          id: added.id || Date.now(),
          ...serviceData,
          ...added,
        };

      }

   
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
        space_name: '',
        service_name: '',
        service_price: '',
        service_duration: '',
        service_category: '',
        product_name: '',
        product_price: '',
        product_stock: '',
        product_status: '',
        status: '',
        stock: '',
price: '',
product_id: '',
    service_id: '',
        unit: '',
   type: '',
        image: null,
       name: '',
        available_days: [] as string[],
      
      });

      setShowModal(false);
    } catch (err: any) {
      alert(err?.response?.data?.message || err.message || 'Failed to add item.');
    }
  };


  const handleEdit = (item: any) => {
    const selectedSpace = spaces.find(s => String(s.id) === String(item.space_id));

    setFormState({
      ...item,
      space_id: item.space_id,
      space_name: selectedSpace?.name || '',
      service_name: item.service_name,
      service_category: item.service_category,
      
      service_duration: item.service_duration,
      service_price: item.service_price,
      available_days: item.available_days || [],
      unit: item.unit,
      product_stock: item.product_stock,
      product_name: item.product_name,
      product_price: item.product_price,



      status: item.status,

      image: null,
    });

    setShowUpdateModal(true);
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
    "Consultations", "Gift Cards",  "Bundles", "Accessories", "Clippers", "Durags",
    "Wave Caps", "Dye Kits", "Detanglers"
  ];

  const RenderTableRows = ({items}:any) => {
  // const items = activeTab === 'products' ? data.products : data.services;
  function getInitials(name: string) {
  if (!name) return '';
  const words = name.trim().split(' ');
  if (words.length === 1) return words[0][0].toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}
const id = activeTab === 'products' ? 'product_id' : 'service_id' ;

  return items?.map((item: any) => {
    return (
      <tr key={item[id]} className="hover:bg-gray-50 border-b border-[#EAECF0]">
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center gap-3">
            {/* <input
              type="checkbox"
              className="appearance-none w-4 h-4 border-2 border-[#D0D5DD] rounded-[4px] checked:bg-[#D0D5DD] checked:border-[#D0D5DD]"
            /> */}
            <div className="flex items-center gap-2">
          {item.image ? (
          <img src={item.image} alt="" className="w-10 h-10 object-cover rounded-full" />
        ) : (
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-sm font-semibold text-gray-700">
            {getInitials(
              activeTab === "products" ? item.product_name : item.service_name
            )}
          </div>
        )}
            </div>
          </div>
        </td>

        <td className="px-4 py-3">{item.space_name}</td>

        {activeTab === "products" ? (
          <>
            <td className="px-4 py-3">{item.product_name}</td>
            <td className="px-4 py-3">{item.product_stock || '-'}</td>
            <td className="px-4 py-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#ECFDF3] text-[#027A48] border border-[#D1FADF]">
                  Active
                </span>
              </td>

            {/* <td className="px-4 py-3">{item.type || '-'}</td> */}
         
            <td className="px-4 py-3">{item.product_price}</td>
        <td className="px-4 py-3 relative">
  
  <button
    onClick={() =>
      setActiveMenuId(activeMenuId === item[id] ? null : item[id])
    }
    className="p-2 rounded hover:bg-gray-100"
  >
    <HiDotsVertical size={20} />
  </button>

  
  {activeMenuId === item[id] && (
    <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-50">
      <button
        onClick={() => {
          setFormState(item);
          setShowUpdateModal(true);
          setActiveMenuId(null);
        }}
        className="block w-full px-4 py-2 text-left bg-[#685BC7] text-white hover:bg-gray-200  hover:text-gray-700"
      >
        Update
      </button>
      <button
        onClick={() => {
          setFormState(item);
          setShowDeleteModal(true);
          setActiveMenuId(null);
        }}
        className="block w-full px-4 py-2 text-left bg-[#F9F5FF]  hover:bg-violet-200 text-black"
      >
        Delete
      </button>
    </div>
  )}
</td>
  


            {/* <td className="px-4 py-3">
              <button
                onClick={() => {
                  setFormState(item);
                  setShowUpdateModal(true);
                }}
                className="bg-[#685BC7] text-white px-4 py-2 rounded"
              >
                Update
              </button>
            </td> */}
          </>
        ) : (
          <>
            <td className="px-4 py-3">{item.service_name}</td>
            <td className="px-4 py-3">{item.service_category}</td>
            <td className="px-4 py-3">
              {item.service_duration ? `${item.service_duration} mins` : '-'}
            </td>
            <td className="px-4 py-3">{item.service_price}</td>
            <td className="px-4 py-3">{(item.available_days || []).join(', ')}</td>
                        <td className="px-4 py-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#ECFDF3] text-[#027A48] border border-[#D1FADF]">
                  Active
                </span>
              </td>
            <td className="px-4 py-3">
              <button
                onClick={() => {
                  setFormState(item);
                  setShowUpdateModal(true);
                }}
                className="bg-[#685BC7] text-white px-4 py-2 rounded"
              >
                Update
              </button>
            </td>
          </>
        )}
      </tr>
    );
  });
};



  return (
<div className="p-2 space-y-6">
  <div
    className="flex  w-full items-center justify-between border-b  border-[#EAECF0]"
    style={{
      height: '60px',
      padding: '14px 32px',
      opacity: 1,
      top: 0,
    }}
  >
<h1 className="text-lg text-gray-900" style={{
      fontWeight: "700",
      fontSize: "20px",
      lineHeight: "30px",
      letterSpacing: "0%",
      verticalAlign: "middle",
    }
  }>Products/Services</h1>
</div>
<div className="px-4 text-sm text-[#475467]">
  <div className="flex justify-between items-center">
    <div className="flex gap-2">
      <button
        className={`px-4 rounded font-medium ${
          activeTab === 'products' ? 'bg-[#685BC7] text-white' : 'bg-gray-200 text-gray-700'
        }`}
        onClick={() => setActiveTab('products')}>
        Products
      </button>
      <button
        className={`px-4 py-2 rounded font-medium ${
          activeTab === 'services' ? 'bg-[#685BC7] text-white' : 'bg-gray-200 text-gray-700'
        }`}
        onClick={() => setActiveTab('services')}>
        Services
      </button>
    </div>
    <button
      className="bg-[#F9F5FF]  text-sm font-medium text-[#685BC7] hover:bg-violet-200 px-4 py-2 rounded-md"
 onClick={() => setShowModal(true)}
      style={
            {
              fontFamily: "Inter",
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "0%",

            }}>
      Add {activeTab === 'products' ? 'Product' : 'Service'}
    </button>
  </div>
  <p className="mt-2 font-normal">
    All the details about your customers
  </p>
</div>

<div className="flex justify-between items-center flex-wrap gap-4 p-4">
  <div className="flex flex-row gap-3 items-center ml-auto">
    <div className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm text-[#344054] bg-white w-full max-w-xs shadow-sm">
      <input type="text" placeholder="Search" className="flex-1 outline-none bg-transparent text-sm text-gray-700" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
      <Icon icon="mynaui:search" width="20" height="20" style={{ color: "#344054" }} />
    </div>
    
<button
  ref={buttonRef}
  onClick={() => setShowBulkModal(true)}
  className="flex items-center justify-center gap-2 px-6 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 text-sm font-bold whitespace-nowrap"
  style={{
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0%",
  }}
>
  <img src="/icons/bulk_uplod.svg" alt="" className="w-4 h-4" />
  Bulk upload
</button>

  </div>
</div>


      <table className="min-w-full text-sm text-left border  text-gray-900 bg-white rounded-md overflow-hidden p-4">
        <thead className="bg-[#F9FAFB] text-[#475467] text-xs font-medium">
          <tr>
            <th className="px-4 py-2">Photos</th>
            <th className="px-4 py-2">Space Name</th>
            {activeTab === 'products' && (
              <>
                <th className="px-4 py-2">Product Name</th>
                <th className="px-4 py-2">Stock</th>
                <th className="px-4 py-2">Status</th>
                
                {/* <th className="px-4 py-2">Type</th> */}
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Actions</th>
              </>
            )}
            {activeTab === 'services' && (
              <>
                <th className="px-4 py-2">Service Name</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Duration</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Available Days</th>
                <th className="px-4 py-2">Status</th>

                <th className="px-4 py-2">Actions</th>
              </>
            )}`
            </tr>
          </thead>
          <tbody><RenderTableRows items={items} /></tbody>
        </table>
        {showModal && (
          <div className="fixed inset-0 bg-[#9999] bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-xl max-h-[90vh] overflow-y-auto p-6 relative">
              <div className="flex justify-between items-center mb-4 border-b border-[#F1F2F3] pb-1">`
              <h3 className="flex text-lg font-semibold mb-4">New {activeTab === 'products' ? 'Product' : 'Service'}</h3>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="flex text-black  bg-[#F6F8FA] rounded-full p-1 border border-[#F1F2F3]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <form onSubmit={handleAddItem} className="grid grid-cols-2 gap-4">
              <select
                className="col-span-2 border border-bg-gray-100 rounded px-3 py-3"
                value={formState.space_id}
                onChange={(e) => {
                  const space_id = e.target.value;
                  const selectedSpace = spaces.find((s) => String(s.id) === space_id);
                  setFormState((f) => ({
                    ...f,
                    space_id,
                    space_name: selectedSpace?.name || '',
                  }));
                }}
              >
                <option value="">Select Space Name</option>
                {spaces.map((space) => (
                  <option key={space.id} value={String(space.id)}>
                    {space.name}
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
    className="border border-bg-gray-100 p-2 py-3 rounded w-full mt-1"
  />
</label>
  {activeTab === 'products' && (
  <>
  <label>
  <span>Type</span>
  <select value={formState.type}
  onChange={(e) => setFormState(f => ({ ...f, type: e.target.value }))} 
  name="type" className="border border-bg-gray-100 p-2 py-4 rounded w-full mt-1"
  >
    <option value="">Select Type</option>
  {productTypes.map((type) => (
    <option key={type} value={type}>
      {type}
    </option>
    ))}
  </select>
</label>
                  <label>
                    <span>Stock</span>
                    <input value={formState.product_stock} onChange={(e) => setFormState(f => ({ ...f, product_stock: e.target.value }))} type="text" className="border border-bg-gray-100 p-2 py-3 rounded w-full mt-1" />
                  </label>
                   <label>
 
            

                <span>Price</span>
                <input value={formState.product_price} onChange={(e) => setFormState(f => ({ ...f, product_price: e.target.value }))} type="text" required className="border border-bg-gray-100 p-2 py-3 rounded w-full mt-1" />
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
                      className="border  border-bg-gray-100 px-2 py-3 rounded w-full mt-1"
                      required
                    />
                  </label>
                </>
              )}

      
              {activeTab === 'services' && (
                <>




                  <label>
                    <span>Duration (minutes)</span>
                    <input value={formState.service_duration} onChange={(e) => setFormState(f => ({ ...f, service_duration: e.target.value }))} type="number" className="border border-bg-gray-100 px-2 py-3  rounded w-full mt-1" />
                  </label>
                  <label >
                    <span>Category</span>

                    <input
                      value={formState.service_category}
                      onChange={(e) =>
                        setFormState((f) => ({ ...f, service_category: e.target.value }))
                      }
                      type="text"
                      required
                      className="border border-bg-gray-100 p-2 py-3 rounded w-full mt-1"
                    />
                  </label>
                   <label>

                <span>Price</span>
                <input value={formState.service_price} onChange={(e) => setFormState(f => ({ ...f, service_price: e.target.value }))} type="text" required className="border border-bg-gray-100 p-2 py-3 rounded w-full mt-1" />
              </label>
               
                  <label className="col-span-2">
                    <span>Available Days</span>
                    <Select
                      className="border border-bg-gray-100 "
                      isMulti
                      options={options}
                      value={options.filter(o => formState?.available_days?.includes(o.value))}
                      onChange={opts =>
                        setFormState(f => ({
                          ...f,
                          available_days: opts.map(o => o.value)
                        }))
                      }
                    />

          
                  </label>



                </>
              )}

              <div className="col-span-2 flex justify-end gap-2 mt-4">
                <button type="button" onClick={() => setShowModal(false)} className="px-12 py-2 bg-gray-200 rounded-md">Cancel</button>
                <button type="submit" className="px-12 py-2 bg-[#685BC7] text-white rounded-md">Save</button>

              </div>

            </form>
          </div>
        </div>
      )}
      {/* Bulk Modal */}
   {showBulkModal && (
<div className="fixed inset-0  bg-opacity-30 flex items-center justify-end z-50">
    <div className="w-[416px] bg-white rounded-lg shadow-lg p-6 relative mr-4">
            <div className="flex justify-between items-center mb-4 border-b border-[#F1F2F3] pb-1">
              <h2 className="flex text-lg font-semibold mb-4">Bulk upload</h2>
              <button
                onClick={() => setShowBulkModal(false)}
                className="flex text-black  bg-[#F6F8FA] rounded-full p-1 border border-[#F1F2F3]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className='flex p-4  '>
              <div className="bg-[#F8FAFC] p-4 border border-[#F1F5F9] rounded-lg mb-4 ">
                <p className="font-medium mb-2 text-[#020617]"
                  style={
                    {
                      fontWeight: "500",
                      fontSize: "14px",
                      lineHeight: "14px",
                      letterSpacing: "0%",
                    }}>Before you proceed</p>
                {activeTab === "services" && (
                  <>
                    <p className="text-[#0F172A]  mb-3"
                      style={
                        {
                          fontWeight: "400",
                          fontSize: "14px",
                          lineHeight: "20px",
                          letterSpacing: "0%",
                        }}>
                      Please download our template below to help you organize and upload your services in bulk.
                    </p>
                  </>
                )}
                {activeTab === "products" && (
                  <>
                    <p className="text-[#0F172A]  mb-3"
                      style={
                        {
                          fontWeight: "400",
                          fontSize: "14px",
                          lineHeight: "20px",
                          letterSpacing: "0%",
                        }}>
                      Please download our template below to help you organize and upload your products in bulk.
                    </p>
                  </>
                )}
                <a
                  href={templateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 font-sans font-medium text-sm text-[#0F172A] bg-white mt-3 border border-[#E2E8F0] rounded shadow transition block text-center"
                >
                  Download template
                </a>
              </div>
            </div>

            {/* <p className="text-xs font-semibold font-sans text-[#94A3B8] mb-4">
              DATE & TIME
            </p> */}

            <p className="text-sm text-[#0F172A] mb-6"
              style={
                {
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: "0%",

                }}>
              If you have done that already, then you can proceed to do your Bulk upload.
            </p>
  <select className="w-full border border-bg-gray-100 rounded px-3 py-3 mb-6"
                value={formState.space_id}
                onChange={(e) => {
                  const space_id = e.target.value;
                  const selectedSpace = spaces.find((s) => String(s.id) === space_id);
                  setFormState((f) => ({
                    ...f,
                    space_id,
                    space_name: selectedSpace?.name || '',
                  }));
                }}
              >

                <option value="">Select Space Name</option>
                {spaces.map((space) => (
                  <option key={space.id} value={String(space.id)}>
                    {space.name}
                  </option>
                ))}
              </select>
          {selectedFile && (
            <p className="text-green-600 text-xs mb-2">Selected File: {selectedFile.name}</p>
          )}
            <div className="flex flex-row gap-2">
  <button
    onClick={() => setShowBulkModal(false)}
    className="w-full py-2 bg-[#F1F5F9] rounded-lg hover:bg-gray-200"
  >
    Cancel
  </button>

  <label className="w-full">
    <input
      type="file"
      accept=".xlsx,.xls,.csv"
      onChange={handleFileChange}
      hidden
      id="file-upload"
    />

    <button
      type="button"
      className={`w-full py-2 rounded text-white ${
        selectedFile ? 'bg-[#685BC7] hover:bg-purple-700' : 'bg-gray-500 cursor-pointer'
      }`}
      onClick={() => {
        if (!selectedFile) {
          document.getElementById('file-upload')?.click();
        } else {
          handleFileUpload();
        }
      }}
    >
      {selectedFile ? 'Upload' : 'Select File'}
    </button>
  </label>
</div>

          </div>
        </div>
      )}
      {message && (
        <div className="text-sm text-green-600">
          {message}
        </div>
      )}
      {showUpdateModal && (
        <div className="fixed inset-0 bg-[#9999] bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-xl max-h-[90vh] overflow-y-auto p-6 relative">
            <div className="flex justify-between items-center mb-4 border-b border-[#F1F2F3] pb-1">
              <h3 className="flex text-lg font-semibold mb-4">Update {activeTab === 'products' ? 'Product' : 'Service'}</h3>
              <button
                type="button"
                onClick={() => setShowUpdateModal(false)}
                className="flex text-black  bg-[#F6F8FA] rounded-full p-1 border border-[#F1F2F3]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <form onSubmit={handleUpdateItem} className="grid grid-cols-2 gap-4">
              <label className="col-span-2">
                <span>Space Name</span>
                <input
                  type="text"
                  value={formState.space_name || '_'}
                  disabled
                  className="border border-bg-gray-100 rounded px-3 py-3 w-full mt-1 bg-gray-100 text-gray-700"
                />
              </label>
              <label className="col-span-2">
  <span>Name</span>
  <input
    value={
      activeTab === 'products'
        ? formState.product_name
        : formState.service_name
    }
    onChange={(e) =>
      setFormState((f) => ({
        ...f,
        ...(activeTab === 'products'
          ? { product_name: e.target.value }
          : { service_name: e.target.value }),
      }))
    }
    type="text"
    required
    className="border border-bg-gray-100 p-2 py-3 rounded w-full mt-1"
  />
</label>
 {activeTab === 'products' && (
                <>
                
                  <label>
                    <span>Stock</span>
                    <input value={formState.product_stock} onChange={(e) => setFormState(f => ({ ...f, product_stock: e.target.value }))} type="text" className="border  border-bg-gray-100 p-2 py-3 rounded w-full mt-1" />
                  </label>
                   <label>

                <span>Price</span>
                <input value={formState.product_price} onChange={(e) => setFormState(f => ({ ...f, product_price: e.target.value }))} type="text" required className="border border-bg-gray-100 p-2 py-3 rounded w-full mt-1" />
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
                      className="border  border-bg-gray-100 px-2 py-3 rounded w-full mt-1"
                      required
                    />
                  </label>

                </>
              )}


              {activeTab === 'services' && (
                <>

                  <label>
                    <span>Category</span>

                    <input
                      value={formState.service_category}
                      onChange={(e) =>
                        setFormState((f) => ({ ...f, service_category: e.target.value }))
                      }
                      type="text"
                      required
                      className="border border-bg-gray-100 p-2 py-3 rounded w-full mt-1"
                    />
                  </label>


                  <label>
                    <span>Duration (minutes)</span>
                    <input value={formState.service_duration} onChange={(e) => setFormState(f => ({ ...f, service_duration: e.target.value }))} type="number" className="border border-bg-gray-100 px-2 py-3  rounded w-full mt-1" />
                  </label>

  <label>

                <span>Price</span>
                <input value={formState.service_price} onChange={(e) => setFormState(f => ({ ...f, service_price: e.target.value }))} type="text" required className="border border-bg-gray-100 p-2 py-3 rounded w-full mt-1" />
              </label>
                  <label className="col-span-2">
                    <span>Available Days</span>
                    <Select
                      className="border border-bg-gray-100"
                      isMulti
                      options={options}
                      value={options.filter(o => formState?.available_days?.includes(o.value))}
                      onChange={opts =>
                        setFormState(f => ({
                          ...f,
                          available_days: opts.map(o => o.value)
                        }))
                      }
                    />


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
                      className="border  border-bg-gray-100 px-2 py-3 rounded w-full mt-1"
                      required
                    />
                  </label>



                </>
              )}

              <div className="col-span-2 flex justify-end gap-2 mt-4">
                <button type="button" onClick={() => setShowUpdateModal(false)} className="px-12 py-2 bg-gray-200 rounded-md">Cancel</button>
                <button type="submit" className="px-12 py-2 bg-[#685BC7] text-white rounded-md">Save</button>

              </div>

            </form>
          </div>
        </div>
      )}

      {showDeleteModal && (
  <div className="fixed inset-0 flex bg-opacity-30 flex items-center justify-end z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
      <h2 className="text-lg font-semibold mb-4">
        Confirm Delete
      </h2>
      <p className="mb-6">
        Are you sure you want to delete this {activeTab === "products" ? "product" : "service"}?
      </p>
      <div className="flex justify-end gap-3">
        <button
          onClick={() => setShowDeleteModal(false)}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
         <button
          onClick={async () => {
            try {
              if (activeTab === "products") {
                await deleteProduct(formState.product_id);
                setData((prev: any) => ({
                  ...prev,
                  products: prev.products.filter(
                    (p: any) => p.product_id !== formState.product_id
                  ),
                }));
              } else {
                await deleteService(formState.service_id);
                setData((prev: any) => ({
                  ...prev,
                  services: prev.services.filter(
                    (s: any) => s.service_id !== formState.service_id
                  ),
                }));
              }
              setShowDeleteModal(false);
            } catch (err) {
              console.error(err);
              alert("Failed to delete item.");
            }
          }}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
)}


  <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />

    </div>
  );
};

export default ProductServiceTabs;