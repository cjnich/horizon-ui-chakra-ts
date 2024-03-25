export const postLogin = async (email: string, password: string) => {
    const response = await fetch("https://api.example.com/login", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });
    
    if (!response.ok) {
        throw new Error("Invalid credentials");
    }
    
    return response.json();
}