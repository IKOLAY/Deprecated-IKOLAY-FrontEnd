import { NavLink } from "react-router-dom"

export function WarningMessage({ warningMessage }) {
    return (
        <div className="alert alert-primary alert-dismissible fade show mt-4 w-100 text-center" role="alert">
            {warningMessage}
            <NavLink to="/">
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                >
                </button>
            </NavLink>
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