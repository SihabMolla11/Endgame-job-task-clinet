

export const addUser = (user) => {
    const currentUser = {
        email: user?.email,
        name: user?.displayName,
        image: user?.photoURL,
        university: "",
        address: ""
    }
    fetch(`${import.meta.env.VITE_DATABASE_URL}/add-user`, {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

}

