import InputComponent from "@/Components/InputComponent.jsx";
function RegisterName(){

    // フォームの送信処理
    const handleSubmit = (event) => {
        event.preventDefault(); // ページのリロードを防ぐ
        const formData = new FormData(event.target); // フォームデータを取得

        // ここでフォームデータを処理することができます。
        // 例えば、APIに送信するなど。
        console.log(Object.fromEntries(formData.entries())); // デバッグ用にコンソールに出力
    }

    return(
        <>
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                <InputComponent name="lastName" title={"氏名"} type={"text"} placeholder={"例）竹内"}></InputComponent>
                <InputComponent name="firstName" title={"名前"} type={"text"} placeholder={"例）千速"}></InputComponent>
                <InputComponent title={"住所"}>
                    <select className="h-full w-full" name="area">
                        <option value="">選択して下さい</option>
                        <option value="1">和具</option>
                        <option value="2">大王</option>
                        <option value="3">御座</option>
                    </select>
                </InputComponent>
                <InputComponent name="price" title={"金額"} type={"number"} placeholder={"例）5000"}></InputComponent>
                <InputComponent title="備考欄">
                   <textarea name="note" className={"w-full h-full"}></textarea>
                </InputComponent>
                <button className="bg-blue-500 text-white w-[10vw] rounded-lg py-2 px-4" type="submit">登録</button>
            </form>
        </>
    )
}

export default RegisterName;
