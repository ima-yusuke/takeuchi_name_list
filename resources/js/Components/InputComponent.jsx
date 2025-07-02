function InputComponent(props){
    return(
        <>
            <aside className="flex items-center h-[50px] w-full">
                <p className="bg-gray-700 text-white p-2 w-[150px] h-full flex items-center">{props.title}</p>

                {/*typeがtextの時は以下のinputで、それ以外はprops.children（親で直接書いたコード）を表示*/}
                {props.type!=null ?
                <input
                    className="h-full w-full"
                    type={props.type}
                    name={props.name}
                    placeholder={props.placeholder}
                />
                :
                props.children
                }
            </aside>
        </>
    )
}
export default InputComponent;
