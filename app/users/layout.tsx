

export default function UsersLayout({
    children,
}: {    
    children: React.ReactNode
}) {
    return (    
       
        <div>
            { " " }
            <h1 style={ {color : "red"} }>This is Users Layout!!</h1>
            { children }
        </div>
                      
    );
}