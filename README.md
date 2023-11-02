# project-2-makeup

This is a JSON API that provides information about various makeup products, including foundation, lipsticks, eyeshadows, and mascaras. This API allows you to access details about different makeup products, their attributes, and retrieve data for various use cases, such as building makeup-related applications or conducting research.

Base URL The base URL for this API is: https://api.example.com/makeup

Authentication No authentication is required to access this API. It's open for public use.

Endpoints

List All Makeup Products Endpoint: /products HTTP Method: GET Description: Retrieve a list of all available makeup products.

Get Makeup Product by ID Endpoint: /products/{product_id} HTTP Method: GET Description: Retrieve information about a specific makeup product using its unique identifier (product_id).

Search Makeup Products Endpoint: /products/search HTTP Method: GET Description: Search for makeup products based on various criteria like product type, brand, or specific attributes.

List All Brands Endpoint: /brands HTTP Method: GET Description: Retrieve a list of all makeup brands available in the database.

Get Brand Information Endpoint: /brands/{brand_id} HTTP Method: GET Description: Retrieve detailed information about a specific makeup brand using its unique identifier (brand_id).

Example JSON Product Data Here's an example of the information you can find in the JSON API for a makeup product:

    "id": 1045,
    "brand": "colourpop",
    "name": "No Filter Foundation",
    "price": "12.0",
    "price_sign": "$",
    "currency": "CAD",
    "image_link": "https://cdn.shopify.com/s/files/1/1338/0845/products/foundations-lineup_800x1200.jpg?v=1528927785",
    "product_link": "https://colourpop.com/products/no-filter-matte-foundation",
    "website_link": "https://colourpop.com/products/no-filter-matte-foundation",
    "description": "Developed for the Selfie Age, our buildable full coverage, natural matte foundation delivers flawless looking skin from day-to-night. The oil-free, lightweight formula blends smoothly and is easily customizable to create the coverage you want. Build it up or sheer it out, it was developed with innovative soft-blurring pigments to deliver true color while looking and feeling natural. The lockable pump is easy to use and keeps your routine mess-free! As always, 100% cruelty-free and vegan.",
    "rating": null,
    "category": "liquid",
    "product_type": "foundation",
    "tag_list": [
      "cruelty free",
      "Vegan"
    ],