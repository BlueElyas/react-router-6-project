import { initializeApp } from "firebase/app";
import { collection, getDocs, getFireStore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyAcDpsRWFLiax29fKkeTrG7rm95HTLnVCs",
  authDomain: "vanl-40785.firebaseapp.com",
  projectId: "vanl-40785",
  storageBucket: "vanl-40785.appspot.com",
  messagingSenderId: "186767100454",
  appId: "1:186767100454:web:ad7ee27d175a1a1c3474e7"
};

const app = initializeApp(firebaseConfig);
const db = getFireStore(app)

const vansCollectionRef = collection(db, "vans")

export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef)
}

// export async function getVans(id) {
//     const url = id ? `/api/vans/${id}` : "/api/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}