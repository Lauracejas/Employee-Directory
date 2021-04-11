import React, { Component } from "react";
import Table from "./Table";
import Navbar from "./Navbar";
import API from "../utils/API"

class Main extends Component {
    state = { employees: [], filterEmployees: [] };

    componentDidMount() {
        API.search().then((res) => {
            console.log(res)
            this.setState({
                employees: res.data.results.map((user) => ({
                    id: user.login.uuid,
                    name: `${user.name.first} ${user.name.last}`,
                    email: user.email,
                    phone: user.phone,
                    picture: user.picture.thumbnail,
                    dob: user.dob.date,
                })),
                filterEmployees: res.data.results.map((user) => ({
                    id: user.login.uuid,
                    name: `${user.name.first} ${user.name.last}`,
                    email: user.email,
                    phone: user.phone,
                    picture: user.picture.thumbnail,
                    dob: user.dob.date,
                })),
            });
        })
            .catch(err => console.log(err));
    };

    refreshPage() {
        window.location.reload(false);
    }

    searchEmployee = (event) => {
        const filter = event.target.value;
        console.log('Search', filter);
        const filteredList = this.state.employees.filter((employee) => {
            let values = Object.values(employee).join('').toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        });
        // Update the employee list with the filtered value
        this.setState({ filterEmployees: filteredList });
    };


    render() {
        return (
            <>
                <Navbar searchEmployee={this.searchEmployee} />
                <Table employees={this.state.filterEmployees} />
            </>
        )
    }

}


export default Main;