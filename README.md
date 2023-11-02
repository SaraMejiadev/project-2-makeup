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

{ "_id": "65413333502a24272a33eec7", "brand": "Maia's Mineral Galaxy", "name": "Mineral Eye Brow Liner Charcoal Brown", "price": 0, "price_sign": "$", "currency": "USD", "image_link": "https://www.purpicks.com/wp-content/uploads/2018/06/Maia%E2%80%99s-Mineral-Galaxy-Mineral-Eye-Brow-Liner-Charcoal-Brown.jpg", "product_link": "https://www.purpicks.com/product/maias-mineral-galaxy-mineral-eye-brow-liner-charcoal-brown/", "website_link": "https://purpicks.com/", "description": "", "rating": null, "category": "pencil", "product_type": "eyebrow", "tag_list": [ "EWG Verified", "purpicks" ], "__v": 0 }