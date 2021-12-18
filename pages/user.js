function User({user}) {
    return (
        <>
            <h1>Users List</h1>
            <div>
                {user.map(user => {
                    return (
                        <div key={user.id}>
                            <p>{user.name}</p>
                            <p>{user.username}</p>
                            <h1>{user.website}</h1>
                            <p>{user.email}</p>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default User;

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);

    return {
        props: {
            user: data
        }
    }
}