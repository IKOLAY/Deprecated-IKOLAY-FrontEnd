import { NavLink } from "react-router-dom"

export function WarningMessage({ warningMessage }) {
    return (
        <div className="alert alert-primary alert-dismissible fade show mt-4 w-100 text-center" role="alert">
            {warningMessage}
        </div>
    )
}

export function FormValidationMessage({ message }) {
    return (
        <div className="alert alert-danger text-center w-100" role="alert">
            {message}
        </div>
    )
}