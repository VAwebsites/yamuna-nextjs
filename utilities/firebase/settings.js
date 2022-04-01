import { doc, setDoc, getDoc } from "firebase/firestore"; 
import {db} from "./firebase";

export const firebaseCreateSetting = async(setting)=>{
    try {
        const settingsRef = doc(db, "settings","website")
        const docRef = await setDoc(settingsRef,setting, { merge: true });
        return docRef.id;
      } catch (e) {
        console.error("Error adding document: ", e);
        return null;
    }
}

export const firebaseGetSetting = async(key)=>{
    const settingsRef = doc(db, "settings","website");
    const docSnap = await getDoc(settingsRef);

    if(docSnap.exists()){
        const settingsObj = docSnap.data();
        switch(key){
            case "RERA_NUMBER": return settingsObj.RERA_NUMBER;
            case "YOUTUBE_LINK": return settingsObj.YOUTUBE_LINK;
            case "COMPANY_EMAIL": return settingsObj.COMPANY_EMAIL;
            case "COMPANY_PHONE": return settingsObj.COMPANY_PHONE;
            case "COMPANY_ADDRESS": return settingsObj.COMPANY_ADDRESS;
            case "BROCHURE_LINK": return settingsObj.BROCHURE_LINK;
        }
        return "INVALID_KEY";
    }else{
        return null;
    }
}

export const firebaseGetAllSettings = async()=>{
    const settingsRef = doc(db, "settings","website");
    const docSnap = await getDoc(settingsRef);

    if(docSnap.exists()){
      return docSnap.data();
    }else{
        return null;
    }
}