import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let employeesHTML = '<ul>'

    for (const employee of employees) {
        employeesHTML += `
        <li data-type="employee"
        data-employee-id="${employee.id}"
        >${employee.name}</li>
        `
    }

    employeesHTML += '</ul>'

    return employeesHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target;

        if (itemClicked.dataset.type === "employee") {
            const employeeId = parseInt(itemClicked.dataset.employeeId, 10)
            let productCounter = 0

            const clickedEmployee = employees.find(employee => employee.id === employeeId)

            if (clickedEmployee) {
                for (const order of orders) {
                    if (order.employeeId === employeeId) {
                        productCounter++;
                    }
                }
                window.alert(`${clickedEmployee.name} has sold ${productCounter} products.`)
            } else {
                window.alert("Employee not found.")
            }
        }
    }
)