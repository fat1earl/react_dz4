import React from "react";
import "./UsersAlbums.css";


export class UsersAlbums extends React.Component {
    state = {
      users: null,
      albums: null,
      isLoading: false,
      error: null,
      name: "",
      title: '',
    };
  
    async componentDidMount() {
      try {
        
        const responseListUsers = await fetch(
          `http://jsonplaceholder.typicode.com/users`
        );      
        const users = await responseListUsers.json();

        const responseListAlbums = await fetch(
          `http://jsonplaceholder.typicode.com/albums`
        );
        const albums = await responseListAlbums.json();


        this.setState({ users, albums, isLoading: false });
      } catch (error) {
        this.setState({ error, isLoading: false });
      }
    }
  
    render() {
      if (this.state.isLoading) {
        return "...Loading...";
      }
  
      if (this.state.error) {
        return `...Error occupied ${this.state.error.message}`;
      }
  
      return (
        
        <>
        
          <ul>
            {this.state.albums &&
              this.state.albums.map((album) => (
                <li key={album.id}>
                  <span>  
                     
                    {this.state.users.find((user) => user.id == album.userId).name} - {album.title}
                    
                  </span>
                </li>
              ))}
          </ul>
        </>
      );
      
    }
  }
  
  export default UsersAlbums;
