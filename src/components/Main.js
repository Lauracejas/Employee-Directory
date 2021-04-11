import React, { Component } from "react";
import Table from "./Table";
import Navbar from "./Navbar";
import API from "../utils/API";
import { format } from 'date-fns'

class Main extends Component {
    state = { employees: [], filterEmployees: [], sortData: "asc" };

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
                    dob: format(new Date(user.dob.date), 'MM-dd-yyyy')
                })),
                filterEmployees: res.data.results.map((user) => ({
                    id: user.login.uuid,
                    name: `${user.name.first} ${user.name.last}`,
                    email: user.email,
                    phone: user.phone,
                    picture: user.picture.thumbnail,
                    dob: format(new Date(user.dob.date), 'MM-dd-yyyy')
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

    sortName = () => {
        this.state.filterEmployees.sort((a, b) => {
            if (this.state.sortData === "asc") {
                this.setState({sortData: "desc"});
                return a.name.localeCompare(b.name)
            }
            this.setState({sortData: "asc"});
            return b.name.localeCompare(a.name);
        })
    //   this.setState({filterEmployees: filteredList})
    }


    render() {
        return (
            <>
                <Navbar searchEmployee={this.searchEmployee} />
                <Table sortName={this.sortName} employees={this.state.filterEmployees} />
            </>
        )
    }

}


export default Main;