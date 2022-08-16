function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let x = Math.floor(Math.random() * 11);
            if (x < 5) {
                resolve({
                    data: [
                        { firstName: "Darshan", lastName: "Sharma", age: 24 },
                        {
                            firstName: "Sanjeev",
                            lastName: "Prabhakar",
                            age: 20,
                        },
                        { firstName: "Virat", lastName: "Kohli", age: 32 },
                        { firstName: "Rohit", lastName: "Sharma", age: 34 },
                        { firstName: "M.S", lastName: "Dhoni", age: 41 },
                        { firstName: "Yuvraj", lastName: "Singh", age: 39 },
                    ],
                    message: "data fetched successfully",
                });
            }
            reject({
                error: "No data found",
            });
        }, 2000);
    });
}
