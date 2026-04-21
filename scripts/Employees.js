import { getEmployees } from "./database.js"

const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li data-type="employee" data-id="${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

