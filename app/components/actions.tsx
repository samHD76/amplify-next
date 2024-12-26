"use server"

import { S3Client } from "@aws-sdk/client-s3"
import {createPresignedPost} from "@aws-sdk/s3-presigned-post"
import {nanoid} from "nanoid"
export async function onSubmit(formData: FormData){
try{
const client=new S3Client({
    region: process.env.AWS_REGION

})
const {url, fields}= await createPresignedPost(client,{
    Bucket: process.env.AWS_BUCKET_NAME || '',
    Key:nanoid()
})
const formDataS3= new FormData()
Object.entries(fields).forEach(([key,value]) => {
    formDataS3.append(key, value)
})
formDataS3.append('file', formData.get('file') as string)
const response =await fetch(url,{
    method:'POST',
    body: formDataS3
})
const textResponse=await response.text()
console.log(textResponse)
if (response.ok){
    console.log("File uploaded")
} else{
    console.log("Some error occur during the file uploading")
    console.log(response)
}


//console.log(url, fields)
}catch (err:any){
console.error(err)
}
}

