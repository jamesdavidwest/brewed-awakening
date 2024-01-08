import { getProducts, getEmployees, getOrders } from "./database.js"

// Get copy of state for use in this module
const products = getProducts()
const employees = getEmployees()
const orders = getOrders()


// Function whose responsibility is to find the product for an order
const findProduct = (order, products) => {
    for (const product of products) {
        if (product.id === order.productId) {
            return product;
        }
    }
    throw new Error(`Product with ID ${order.productId} no found.`)
}

// Function whose responsibility is to find the employee for an order
const findEmployee = (order, employees) => {
    for (let i = 0; i < employees.length; i++){
        if (employees[i].id === order.employeeId) {
            return employees[i]
        }
    }
        throw new Error(`Employee with ID ${order.employeeId} not found.`)
}


export const Orders = () => {
    let ordersHTML = ""
    ordersHTML = "<ul>"

    for (const order of orders) {
        const employee = findEmployee(order, employees)
        const product = findProduct(order, products)

        ordersHTML += `<li>${product.name} was sold by ${employee.name} on ${new Date(order.timestamp).toLocaleDateString()}</li>`
    }

    ordersHTML += "</ul>"

    return ordersHTML
}

