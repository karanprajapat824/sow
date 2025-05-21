import "./../Css/Pricelist.css";
import Navbar from "./../Components/Navbar";
import Sidebar from './../Components/Sidebar';
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlinePlusCircle } from "react-icons/ai"
import { FcPlus } from "react-icons/fc";
import { FcPrint, FcPieChart } from "react-icons/fc";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState, useEffect } from "react";
import Popup from "../Components/popup";

const Pricelist = () => {
    const [sidebar, setSidebar] = useState(false);
    const [list, setList] = useState([]);
    const [loading,setLoading] = useState(true);
    const [edit,setEdit] = useState(0);
    const [update,setUpdate] = useState({
        loading : false,
        update : false
    });

    const delay = (ms) => new Promise(setInterval(()=>{
        setUpdate({loading : false,update : false});
    },ms));

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const response = await fetch("https://backend-price-list.onrender.com/products", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.ok) {
                const data = await response.json();
                setList(data);
                console.log(data);
            }
            else alert("error while fetching data");
            setLoading(false);
        }
        fetchData();
    }, []);

    const handleInputChange = (index, field, value) => {
        const newList = [...list];
        setEdit(index);
        newList[index][field] = value;
        setList(newList);
    };

    const updateField = async (id, updatedData) => {
        setUpdate({loading : false,update : false});
        try {
            const response = await fetch(`https://backend-price-list.onrender.com/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });

            if (!response.ok) {
                setUpdate({loading : true,update : false});
                delay(5000);
            }
            setUpdate({loading : true,update : true});
            delay(5000);
        } catch (error) {
            console.error('Error:', error);
            setUpdate({loading : true,update : false});
            delay(5000);
        }
    };


    return (
        <div className="pricelist">
            <Navbar sidebar={sidebar} setSidebar={setSidebar} />
            <div className="pricelist-body">
                {
                    sidebar ? <div className="sidebar mobile-only">
                        <Sidebar />
                    </div> : null
                }
                <div className="sidebar desktop-only">
                    <Sidebar />
                </div>
                <div className="pricelist-container">
                    <div className="search-button-container">
                        <div className="search-body">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Serach article no....."
                                ></input>
                                <button><IoSearchOutline className="search-button-icon" /></button>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Search Product...."
                                ></input>
                                <button><IoSearchOutline className="search-button-icon" /></button>
                            </div>
                        </div>
                        <div className="pricelist-buttons">
                            <button><div>New Products</div><FcPlus style={{ fontSize: "1.5em" }} /></button>
                            <button><div>Price List</div><FcPrint style={{ fontSize: "1.5em" }} /></button>
                            <button><div>Advance Mode</div><FcPieChart style={{ fontSize: "1.5em" }} /></button>
                        </div>
                    </div>
                    <div className="pricelist-header-container">
                        <div className="arraw"></div>
                        <div className="article-number">Article No.&nbsp;<FaArrowDown style={{ color: "#187ee1" }} /></div>
                        <div className="Product-service">Product/Service&nbsp;<FaArrowDown style={{ color: "green" }} /></div>
                        <div className="in-price desktop-only">In Price</div>
                        <div className="price ">Price</div>
                        <div className="unit">Unit</div>
                        <div className="in-stock">In Stock</div>
                        <div className="description desktop-only">Description</div>
                        <div className="dot"></div>
                    </div>
                    {
                        loading ? <div className="no-data">Loading...</div> :
                        list.length == 0 ? <div className="no-data">No data available</div> :  
                        list.map((item, index) => (
                            <div className="pricelist-header-container" key={item.id}>
                                <div className="arraw">{edit == index ? <FaArrowRightLong /> : null}</div>
                                <input
                                    type="text"
                                    value={item.artical_no}
                                    onChange={(e) => handleInputChange(index, 'artical_no', e.target.value)}
                                    onBlur={() => updateField(item.id, list[index])}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            updateField(item.id, list[index]);
                                            e.target.blur();
                                        }
                                    }}
                                    className="article-number content-border"
                                />
                                <input
                                    type="text"
                                    value={item.product_service}
                                    onChange={(e) => handleInputChange(index, 'product_service', e.target.value)}
                                    onBlur={() => updateField(item.id, list[index])}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            updateField(item.id, list[index]);
                                            e.target.blur();
                                        }
                                    }}
                                    className="Product-service content-border"
                                />
                                <input
                                    type="text"
                                    value={item.in_price}
                                    onChange={(e) => handleInputChange(index, 'in_price', e.target.value)}
                                    onBlur={() => updateField(item.id, list[index])}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            updateField(item.id, list[index]);
                                            e.target.blur();
                                        }
                                    }}
                                    className="in-price content-border desktop-only"
                                />
                                <input
                                    type="text"
                                    value={item.price}
                                    onChange={(e) => handleInputChange(index, 'price', e.target.value)}
                                    onBlur={() => updateField(item.id, list[index])}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            updateField(item.id, list[index]);
                                            e.target.blur();
                                        }
                                    }}
                                    className="price content-border"
                                />
                                <input
                                    type="text"
                                    value={item.unit}
                                    onChange={(e) => handleInputChange(index, 'unit', e.target.value)}
                                    onBlur={() => updateField(item.id, list[index])}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            updateField(item.id, list[index]);
                                            e.target.blur();
                                        }
                                    }}
                                    className="unit content-border"
                                />
                                <input
                                    type="text"
                                    value={item.in_stock}
                                    onChange={(e) => handleInputChange(index, 'in_stock', e.target.value)}
                                    onBlur={() => updateField(item.id, list[index])}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            updateField(item.id, list[index]);
                                            e.target.blur();
                                        }
                                    }}
                                    className="in-stock content-border"
                                />
                                <input
                                    type="text"
                                    value={item.description}
                                    onChange={(e) => handleInputChange(index, 'description', e.target.value)}
                                    onBlur={() => updateField(item.id, list[index])}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            updateField(item.id, list[index]);
                                            e.target.blur();
                                        }
                                    }}
                                    className="description content-border desktop-only"
                                />
                                <div className="dot">...</div>
                            </div>
                        ))
                         
                    }

                </div>
            </div>
            {
                update.loading ? <Popup done={update.update}/> : null
            }
        </div>
    )
}

export default Pricelist;