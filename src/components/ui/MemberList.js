import { Component } from 'react'
import fetch from 'isomorphic-fetch'
import Member from './Member'

class MemberList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            members: [
            {
                name: "Colin Smith",
                email: "colin.smith@example.com",
                thumbnail: "https://randomuser.me/api/portraits/men/53.jpg"
            },
            {
                name: "Bill Belicheck",
                email: "bill.belicheck@example.com",
                thumbnail: "https://randomuser.me/api/portraits/men/74.jpg"
            },
            {
                name: "J.K. Rowling",
                email: "jk.rowling@example.com",
                thumbnail: "https://randomuser.me/api/portraits/women/34.jpg"
            }
          ]
        }
    }

    render() {
    	const { members } = this.state
        return (
            <div className="member-list">
            	<h1>Society Members</h1>
				{members.map(
					(data, i) => 
						<Member key={i} 
								onClick={email => console.log(email)}
								{...data} />
				)}
            </div>
        )    
   }     
}

export default MemberList