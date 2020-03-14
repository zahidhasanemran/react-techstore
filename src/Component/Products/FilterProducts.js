import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../../context/ProductContext';


function FilterProducts(props) {
    return (
        <ProductConsumer>
            {value => {
                const {search, min, max, company, price, shipping, handleChange, storeProducts} = value;
                let companies = new Set();
                companies.add("all");
                for(let pro in storeProducts){
                    companies.add(storeProducts[pro]["company"])
                }
                companies = [...companies];
                
                
                return(
                    <div className="row my-5">
                        <div className="col-10 mx-auto">
                            <FilterWrapper>
                                <div className="search">
                                    <label htmlFor="search">search Products</label>
                                    <input 
                                    type="text" 
                                    name="search"
                                    id="search"
                                    onChange={handleChange}
                                    value={search}
                                    className="filter-item"
                                    />
                                </div>
                                <div className="">
                                    <label htmlFor="company">Company</label>
                                    <select 
                                    name="company" 
                                    id="company"
                                    value={company}
                                    onChange={handleChange}
                                    className="filter-item"
                                    >
                                    {
                                    companies.map((company, index) => {
                                    return <option key={index} value={company}>{company}</option>
                                    })
                                    }
                                       
                                    </select>
                                </div>
                                <div className="">
                                    <label htmlFor="price">
                                    <p className="mb-2">Product Price: <span>
                                        $ {price}
                                        </span></p>
                                    </label>
                                    
                                    <input 
                                    type="range" 
                                    name="price" 
                                    id="price"
                                    min={min}
                                    max={max}
                                    className="filter-price"
                                    value={price}
                                    onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="shipping" className="mx-2">Free Shipping</label>
                                    <input 
                                    type="checkbox" 
                                    name="shipping" 
                                    id="shipping"
                                    onChange={handleChange}
                                    checked={shipping && true}
                                    />
                                </div>
                            </FilterWrapper>
                        </div>
                    </div>
                )
            }}
        </ProductConsumer>
    );
}

export default FilterProducts;


const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  label {
    font-weight: bold;
    text-transform: capitalize;
  }
  .filter-item,
  .filter-price {
    display: block;
    width: 100%;
    background: transparent;
    border-radius: 0.5rem;
    border: 2px solid var(--darkGrey);
  }
`;
