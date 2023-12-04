import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Account() {
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();

    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };

    const signout = async () => {
        await client.signout();
        navigate("/kanbas/Login");
    };


    useEffect(() => {
        fetchAccount();
    }, []);

    const save = async () => {
        await client.updateUser(account);
    };

    return (
        <div className="w-50">
            <h1>Account</h1>
            {account && (
                <div >
                    <input value={account.password} placeholder="password"
                        onChange={(e) => setAccount({
                            ...account,
                            password: e.target.value
                        })} />
                    <input value={account.firstName} placeholder="firstName"
                        onChange={(e) => setAccount({
                            ...account,
                            firstName: e.target.value
                        })} />
                    <input value={account.lastName} placeholder="lastName"
                        onChange={(e) => setAccount({
                            ...account,
                            lastName: e.target.value
                        })} />
                    <input value={account.dob} placeholder="dob"
                        onChange={(e) => setAccount({
                            ...account,
                            dob: e.target.value
                        })} />
                    <input value={account.email} placeholder="email"
                        onChange={(e) => setAccount({
                            ...account,
                            email: e.target.value
                        })} />
                    <select onChange={(e) => setAccount({
                        ...account,
                        role: e.target.value
                    })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    <button className="btn btn-primary w-15" onClick={save}>Save</button>
                    <Link to="/kanbas/users" className="btn btn-warning w-15"> Users </Link>
                    <button className="btn btn-danger w-15" onClick={signout}>
                        Signout
                    </button>
                </div>
            )}
        </div>
    );
}
export default Account;