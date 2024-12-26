import { onSubmit } from "./actions";

export default function UploadImage(){
    return(

        <form action={onSubmit}>
            <input type="file" name="file"/>
            <input type="submit" value="Upload"/>
        </form>
    )
}