import { useState } from "react";
import "../assets/styles/RegisterPage.css"
import { NavLink } from "react-router-dom";

export function RegisterPage() {
    const [role, setRole] = useState(null);

    return (
        <div>
            {role === null && <SelectRole setRole={setRole} />}
            {role === "company" && <RegisterCompanyManager />}
            {role === "guest" && <RegisterGuest />}
        </div>
    )
}

