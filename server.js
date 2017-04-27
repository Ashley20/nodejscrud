
/* Dependency modules */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connection;
var ObjectId = mongoose.Schema.Types.ObjectId;

var Territories = require('./models/Territory');
var Regions = require('./models/Region');
var Suppliers = require('./models/Supplier');
var Shippers = require('./models/Shipper');
var Customers = require('./models/Customer');
var Categories = require('./models/Category');
var Employees = require('./models/Employee');
var Orders = require('./models/Order');
var OrderDetails = require('./models/OrderDetail');
var Products = require('./models/Product');



// Connect to Mongoose
mongoose.connect('mongodb://localhost/northwind', function(err, database){
	if(err){
		console.log(err);
	}
});


app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.listen(4000);



/*                   TERRITORIES             */

app.get("/api/territories", function(req, res){

  Territories.getTerritories(function(err,territories){
		if(err){
			throw err;
		}

		res.json(territories);

	}); 


	
});

app.put("/api/territories/:_id", function(req, res){
   var id = req.params._id;
   var Territory = new Territories();
   Territory.TerritoryDescription = req.body.TerritoryDescription;
   Territory.region_ids = req.body.region_ids;

   Territories.updateTerritory(id, Territory, {}, function(err, territoryupdated){
		if(err){
			throw err;
		}

		res.json(territoryupdated);

	});
	
});

app.post("/api/territories", function(req, res){
   var Territory = new Territories();
   Territory.TerritoryDescription = req.body.TerritoryDescription;
   Territory.region_ids = req.body.region_ids;

   Territories.addTerritory(Territory, function(err, territorysaved){
		if(err){
			throw err;
		}

		res.json(territorysaved);

	});
	
});

app.delete("/api/territories/:_id", function(req, res){
	var id = req.params._id;
	
	Territories.removeTerritory(id, function(err, territoryremoved){
		if(err){
			throw err;
		}

		res.json(territoryremoved);

	});
});



/*                    REGIONS                 */

app.get("/api/regions", function(req, res){
	
	Regions.getRegions(function(err,regions){
		if(err){
			throw err;
		}

		res.json(regions);

	});
});

app.put("/api/regions/:_id", function(req, res){
	var id = req.params._id;
	var Region = new Regions();
	Region.RegionDescription = req.body.RegionDescription;
	
	Regions.updateRegion(id, Region, {}, function(err,regionupdated){
		if(err){
			throw err;
		}

		res.json(regionupdated);

	});
});



app.post("/api/regions", function(req, res){
	var Region = new Regions();
	Region.RegionDescription = req.body.RegionDescription;
	
	Regions.addRegion(Region, function(err,regionsaved){
		if(err){
			throw err;
		}

		res.json(regionsaved);

	});
});

app.delete("/api/regions/:_id", function(req, res){
	var id = req.params._id;
	
	Regions.removeRegion(id, function(err, regionremoved){
		if(err){
			throw err;
		}

		res.json(regionremoved);

	});
});


 /*                       SUPPLIERS                */
app.get("/api/suppliers", function(req, res){
	
	Suppliers.getSuppliers(function(err,suppliers){
		if(err){
			throw err;
		}

		res.json(suppliers);

	});
});

app.put("/api/suppliers/:_id", function(req, res){
	var id = req.params._id;
	var Supplier = new Suppliers();
	Supplier.CompanyName = req.body.CompanyName;
	Supplier.ContactName = req.body.ContactName;
	Supplier.Phone = req.body.Phone;
	Supplier.Adress = req.body.Adress;
	Supplier.HomePage = req.body.HomePage;
	Supplier.PostalCode = req.body.PostalCode;

	Suppliers.updateSupplier(id, Supplier, {}, function(err, supplierupdated){

		if(err){
			throw err;
		}
		res.json(supplierupdated);
	});

});

app.post("/api/suppliers", function(req, res){
	var Supplier = new Suppliers();
	Supplier.CompanyName = req.body.CompanyName;
	Supplier.ContactName = req.body.ContactName;
	Supplier.Phone = req.body.Phone;
	Supplier.Adress = req.body.Adress;
	Supplier.HomePage = req.body.HomePage;
	Supplier.PostalCode = req.body.PostalCode;

	Suppliers.addSupplier(Supplier, function(err, suppliersaved){

		if(err){
			throw err;
		}
		res.json(suppliersaved);
	});

});

app.delete("/api/suppliers/:_id", function(req, res){
	var id = req.params._id;
	
	Suppliers.removeSupplier(id, function(err, supplierremoved){
		if(err){
			throw err;
		}

		res.json(supplierremoved);

	});
});



/*                        SHIPPERS              */

app.get("/api/shippers", function(req, res){
	
	Shippers.getShippers(function(err,shippers){
		if(err){
			throw err;
		}

		res.json(shippers);

	});
});

app.put("/api/shippers/:_id", function(req, res){
	var id = req.params._id;
	var Shipper = new Shippers();
	Shipper.CompanyName = req.body.CompanyName;
	Shipper.Phone = req.body.Phone;

	Shippers.updateShipper(id, Shipper, {}, function(err, shipperupdated){

		if(err){
			throw err;
		}
		res.json(shipperupdated);
	})

});

app.post("/api/shippers", function(req, res){
	var Shipper = new Shippers();
	Shipper.CompanyName = req.body.CompanyName;
	Shipper.Phone = req.body.Phone;

	Shippers.addShipper(Shipper, function(err, shippersaved){

		if(err){
			throw err;
		}
		res.json(shippersaved);
	})

});

app.delete("/api/shippers/:_id", function(req, res){
	var id = req.params._id;
	
	Shippers.removeShipper(id, function(err, shipperremoved){
		if(err){
			throw err;
		}

		res.json(shipperremoved);

	});
});


/*                  CUSTOMERS                     */

app.get("/api/customers", function(req, res){
	
	Customers.getCustomers(function(err,customers){
		if(err){
			throw err;
		}

		res.json(customers);

	});
});

app.put("/api/customers/:_id", function(req, res){
	var id = req.params._id;
	var Customer = new Customers();
	Customer.companyName = req.body.companyName;
	Customer.contactName = req.body.contactName;
	Customer.Phone = req.body.Phone;
	Customer.Adress = req.body.Adress;
	Customer.Region = req.body.Region;

	Customers.updateCustomer(id, Customer, {}, function(err,customerupdated){
		if(err){
			throw err;
		}

		res.json(customerupdated);

	});
});

app.post("/api/customers", function(req, res){
	var Customer = new Customers();
	Customer.companyName = req.body.companyName;
	Customer.contactName = req.body.contactName;
	Customer.Phone = req.body.Phone;
	Customer.Adress = req.body.Adress;
	Customer.Region = req.body.Region;

	Customers.addCustomer(Customer, function(err,customersaved){
		if(err){
			throw err;
		}

		res.json(customersaved);

	});
});

app.delete("/api/customers/:_id", function(req, res){
	var id = req.params._id;
	
	Customers.removeCustomer(id, function(err,customerremoved){
		if(err){
			throw err;
		}

		res.json(customerremoved);

	});
});





/*                       CATEGORIES                         */
app.get("/api/categories", function(req, res){
	
	Categories.getCategories(function(err,categories){
		if(err){
			throw err;
		}

		res.json(categories);

	});
});


app.get("/api/categories/:_id", function(req, res){
	
	Categories.getCategoryById(req.params._id, function(err,category){
		if(err){
			throw err;
		}

		res.json(category);

	});
});


app.put("/api/categories/:_id", function(req, res){
	var id = req.params._id;
	var Category = new Categories();
	Category.CategoryName = req.body.CategoryName;
	Category.Description = req.body.Description;
	Category.Picture = req.body.Picture;


	Categories.updateCategory(id, Category, {}, function(err, Categoryupdated){
		if(err){
			throw err;
		}
		res.json(Categoryupdated);
	}); 


});

app.post("/api/categories", function(req, res){
	var Category = new Categories();
	Category.CategoryName = req.body.CategoryName;
	Category.Description = req.body.Description;
	Category.Picture = req.body.Picture;
	
	Categories.addCategory(Category , function(err,Categorysaved){
		if(err){
			throw err;
		}

		res.json(Categorysaved);

	}); 
});

app.delete("/api/categories/:_id", function(req, res){
	var id = req.params._id;

	Categories.removeCategory(id, function(err, Categoryremoved){
		if(err){
			throw err;
		}
		res.json(Categoryremoved);
	}); 


});



/*                   EMPLOYEES                */

app.get("/api/employees", function(req, res){
	Employees.getEmployees(function(err, employees){
		if(err){
			throw err;
		}
		res.json(employees);
	});

});

app.put("/api/employees/:_id", function(req, res){
	var id = req.params._id;
	var Employee = new Employees();
	Employee.firstName = req.body.firstName;
	Employee.lastName = req.body.lastName;
	Employee.birthDate = req.body.birthDate;
	Employee.hireDate = req.body.hireDate;
	Employee.Phone = req.body.Phone;
	Employee.Adress = req.body.Adress;
	Employee.Notes =  req.body.Notes;
	Employee.ImageUrl = req.body.ImageUrl;
	Employee.territoryId = req.body.territoryId;

	Employees.updateEmployee(id, Employee, {}, function(err, employeeupdated){
		if(err){
			throw err;
		}
		res.json(employeeupdated);
	});

});

app.post("/api/employees", function(req, res){
	var Employee = new Employees();
	Employee.firstName = req.body.firstName;
	Employee.lastName = req.body.lastName;
	Employee.birthDate = req.body.birthDate;
	Employee.hireDate = req.body.hireDate;
	Employee.Phone = req.body.Phone;
	Employee.Adress = req.body.Adress;
	Employee.Notes =  req.body.Notes;
	Employee.ImageUrl = req.body.ImageUrl;
	Employee.territoryId = req.body.territoryId;

	Employees.addEmployee(Employee, function(err, employeesaved){
		if(err){
			throw err;
		}
		res.json(employeesaved);
	});

});

app.delete("/api/employees/:_id", function(req, res){
	var id = req.params._id;
	
	Employees.removeEmployee(id, function(err, employeeremoved){
		if(err){
			throw err;
		}

		res.json(employeeremoved);

	});
});



/*                      ORDERS                     */

app.get("/api/orders", function(req, res){
	Orders.getOrders(function(err, orders){
		if(err){
			throw err;
		}
		res.json(orders);
	});

});

app.put("/api/orders/:_id", function(req, res){
	var id = req.params._id;
	var Order = new Orders();
	Order.CustomerId = req.body.CustomerId;
	Order.EmployeeId = req.body.EmployeeId;
	Order.OrderDate = new Date();
	Order.ShippedDate = new Date();
	Order.ShipCountry = req.body.ShipCountry;
	Order.ShipperId = req.body.ShipperId;
	
	Orders.updateOrder(id, Order, {}, function(err,Orderupdated){
		if(err){
			throw err;
		}

		res.json(Orderupdated);

	}); 
});

app.post("/api/orders", function(req, res){
	var Order = new Orders();
	Order.CustomerId = req.body.CustomerId;
	Order.EmployeeId = req.body.EmployeeId;
	Order.OrderDate = new Date();
	Order.ShippedDate = new Date();
	Order.ShipCountry = req.body.ShipCountry;
	Order.ShipperId = req.body.ShipperId;
	
	Orders.addOrder(Order , function(err,Ordersaved){
		if(err){
			throw err;
		}

		res.json(Ordersaved);

	}); 
});

app.delete("/api/orders/:_id", function(req, res){
	var id = req.params._id;
	
	Orders.removeOrder(id, function(err, orderremoved){
		if(err){
			throw err;
		}

		res.json(orderremoved);

	});
});




/*                ORDERDETAILS            */

app.get("/api/orderdetails", function(req, res){
	OrderDetails.getOrderDetails(function(err, orderdetails){
		if(err){
			throw err;
		}
		res.json(orderdetails);
	});

});

app.put("/api/orderdetails/:_id", function(req, res){
	var id = req.params._id;
	var OrderDetail = new OrderDetails();
	OrderDetail.ProductId = req.body.ProductId;
	OrderDetail.UnitPrice = req.body.UnitPrice;
	OrderDetail.Quantity = req.body.Quantity;
	OrderDetail.Discount = req.body.Discount;

	OrderDetails.updateOrderDetail(id, OrderDetail, {}, function(err, orderdetailupdated){
		if(err){
			throw err;
		}
		res.json(orderdetailupdated);
	});

});


app.post("/api/orderdetails", function(req, res){
	var OrderDetail = new OrderDetails();
	OrderDetail.ProductId = req.body.ProductId;
	OrderDetail.UnitPrice = req.body.UnitPrice;
	OrderDetail.Quantity = req.body.Quantity;
	OrderDetail.Discount = req.body.Discount;

	OrderDetails.addOrderDetail(OrderDetail, function(err, orderdetailsaved){
		if(err){
			throw err;
		}
		res.json(orderdetailsaved);
	});

});

app.delete("/api/orderdetails/:_id", function(req, res){
	var id = req.params._id;
	
	OrderDetails.removeOrderDetail(id, function(err, orderdetailremoved){
		if(err){
			throw err;
		}

		res.json(orderdetailremoved);

	});
});




/*                      PRODUCTS                  */

app.get("/api/products", function(req, res){
	Products.getProducts(function(err, products){
		if(err){
			throw err;
		}
		res.json(products);
	});

});

app.put("/api/products/:_id", function(req, res){
	var id = req.params._id;
	var Product = new Products();
	console.log(req.body);
	Product.ProductName =  req.body.ProductName;
	Product.SupplierId = req.body.SupplierId;
	Product.CategoryId = req.body.CategoryId;
	Product.QuantityPerUnit = req.body.QuantityPerUnit;
	Product.UnitPrice = req.body.UnitPrice;
	Product.UnitsInStock = req.body.UnitsInStock;
	Product.UnitsOnOrder = req.body.UnitsOnOrder;

	Products.updateProduct(id, Product, {}, function(err, productupdated){
		if(err){
			throw err;
		}
		res.json(productupdated);
	});

});

app.post("/api/products", function(req, res){
	var Product = new Products();
	console.log(req.body);
	Product.ProductName =  req.body.ProductName;
	Product.SupplierId = req.body.SupplierId;
	Product.CategoryId = req.body.CategoryId;
	Product.QuantityPerUnit = req.body.QuantityPerUnit;
	Product.UnitPrice = req.body.UnitPrice;
	Product.UnitsInStock = req.body.UnitsInStock;
	Product.UnitsOnOrder = req.body.UnitsOnOrder;

	Products.addProduct(Product, function(err, productsaved){
		if(err){
			throw err;
		}
		res.json(productsaved);
	});

});

app.delete("/api/products/:_id", function(req, res){
	var id = req.params._id;
	
	Products.removeProduct(id, function(err, productremoved){
		if(err){
			throw err;
		}

		res.json(productremoved);

	});
});





	



console.log("Listening to PORT 4000");