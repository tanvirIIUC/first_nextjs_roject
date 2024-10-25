const DynamicProductPage=({params,searchParams})=> {
    
    //http://localhost:3000/products/12?category=laptop
    return (
     <div>
        <h1> this is DynamicProductPage page {params.productid} </h1>
        <h1> this is DynamicProductPage page {searchParams.category} </h1>
     </div>
    );
  }
  
  export default DynamicProductPage