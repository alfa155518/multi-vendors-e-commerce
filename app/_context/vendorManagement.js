"use client";
import React, { useState } from "react";
import { createContext } from "react";

export const vendorContext = createContext({});

export default function VendorManageMent({ children }) {
  const vendor = {
    id: "v1",
    name: "John Doe",
    email: "john.doe@techhub.com",
    phone: "+1 (555) 123-4567",
    country: "United States",
    storeLogo: {
      url: "https://res.cloudinary.com/duumkzqwx/image/upload/v1731445530/multi-vendor%20E-commerce/stores/azb4a3hkeznzh7voowwu",
      publicId: "multi-vendor E-commerce/stores/azb4a3hkeznzh7voowwu",
    },
    storeBanner: {
      url: "https://res.cloudinary.com/duumkzqwx/image/upload/f_auto,q_auto/v1/multi-vendor%20E-commerce/stores/o2fadfx2xeio6lowesix",
      publicId: null,
    },
    products: [
      {
        id: "p1",
        name: "Premium Headphones",
        price: 199.99,
        image: "/placeholder.svg?height=150&width=150",
        stock: 10,
        sales: 120,
      },
      {
        id: "p2",
        name: "Wireless Mouse",
        price: 49.99,
        image: "/placeholder.svg?height=150&width=150",
        stock: 100,
        sales: 250,
      },
      {
        id: "p3",
        name: "Mechanical Keyboard",
        price: 129.99,
        image: "/placeholder.svg?height=150&width=150",
        stock: 75,
        sales: 180,
      },
      {
        id: "p4",
        name: "4K Monitor",
        price: 399.99,
        image: "/placeholder.svg?height=150&width=150",
        stock: 30,
        sales: 75,
      },
      {
        id: "p5",
        name: "Ergonomic Chair",
        price: 299.99,
        image: "/placeholder.svg?height=150&width=150",
        stock: 20,
        sales: 40,
      },
    ],
    storeDetails: {
      description:
        "TechHub Electronics is your one-stop shop for high-quality tech products. We offer a curated selection of electronics and accessories for both enthusiasts and professionals. Our commitment to quality and customer satisfaction sets us apart in the market.",
      storeName: "TechHub Electronics",
      established: "2018",
    },
    performanceMetrics: {
      totalOrders: 1250,
      totalSales: 175000,
      averageRating: 4.7,
      reviews: 980,
    },
    recentOrders: [
      {
        id: "o1",
        customerName: "Alice Johnson",
        date: "2023-06-15",
        status: "delivered",
        count: 2,
        total: 249.98,
      },
      {
        id: "o2",
        customerName: "Bob Smith",
        date: "2023-06-14",
        status: "pending...",
        count: 5,
        total: 129.99,
      },
      {
        id: "o3",
        customerName: "Carol Williams",
        date: "2023-06-14",
        status: "delivered",
        count: 1,
        total: 399.99,
      },
      {
        id: "o4",
        customerName: "David Brown",
        date: "2023-06-13",
        status: "pending...",
        count: 2,
        total: 49.99,
      },
      {
        id: "o5",
        customerName: "Eve Davis",
        date: "2023-06-13",
        status: "delivered",
        count: 1,
        total: 329.98,
      },
    ],
  };

  const [recentOrder, setRecentOrder] = useState(vendor.recentOrders);

  const [products, setProducts] = useState(vendor.products);

  return (
    <vendorContext.Provider value={{ vendor, recentOrder, products }}>
      {children}
    </vendorContext.Provider>
  );
}
