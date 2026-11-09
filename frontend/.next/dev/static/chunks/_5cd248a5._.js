(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/firebase.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "authErrorMessage",
    ()=>authErrorMessage,
    "db",
    ()=>db,
    "ensureUser",
    ()=>ensureUser,
    "loginWithEmail",
    ()=>loginWithEmail,
    "loginWithGoogle",
    ()=>loginWithGoogle,
    "logout",
    ()=>logout,
    "registerWithEmail",
    ()=>registerWithEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
"use client";
;
;
;
async function persistProfile(user, displayName) {
    const { ensureUserDoc } = await __turbopack_context__.A("[project]/lib/profile.ts [app-client] (ecmascript, async loader)");
    await ensureUserDoc(user, displayName);
}
const firebaseConfig = {
    apiKey: "AIzaSyDZZyc8OzHbBRBBs2_8TDdYlps-IF9CFow",
    authDomain: "conspritzador.firebaseapp.com",
    projectId: "conspritzador",
    storageBucket: "conspritzador.firebasestorage.app",
    messagingSenderId: "642039998093",
    appId: "1:642039998093:web:c09682baf2f6f00a7da4c4",
    measurementId: "G-RQ26Y0RBTD"
};
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])().length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApp"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig);
/**
 * Local întâi (conturile înregistrate rămân logate), apoi sesiune (oaspeții
 * anonimi pe tab, ca să poți testa 2–3 jucători în ferestre diferite).
 */ function makeAuth() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeAuth"])(app, {
            persistence: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserLocalPersistence"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserSessionPersistence"]
            ]
        });
    } catch  {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])(app);
    }
}
const auth = makeAuth();
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
function authErrorMessage(err) {
    const code = typeof err === "object" && err && "code" in err ? String(err.code) : "";
    switch(code){
        case "auth/email-already-in-use":
        case "auth/credential-already-in-use":
            return "Există deja un cont cu acest email.";
        case "auth/invalid-email":
            return "Adresa de email nu e validă.";
        case "auth/weak-password":
            return "Parola trebuie să aibă cel puțin 6 caractere.";
        case "auth/user-not-found":
        case "auth/wrong-password":
        case "auth/invalid-credential":
            return "Email sau parolă greșită.";
        case "auth/popup-closed-by-user":
        case "auth/cancelled-popup-request":
            return "Autentificarea a fost anulată.";
        case "auth/operation-not-allowed":
            return "Metoda de autentificare nu e activată în consola Firebase.";
        case "auth/too-many-requests":
            return "Prea multe încercări. Așteaptă puțin.";
        default:
            return "Nu am putut autentifica. Încearcă din nou.";
    }
}
async function ensureUser() {
    await auth.authStateReady();
    if (auth.currentUser) {
        await persistProfile(auth.currentUser);
        return auth.currentUser;
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setPersistence"])(auth, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserSessionPersistence"]);
    const cred = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signInAnonymously"])(auth);
    await persistProfile(cred.user);
    return cred.user;
}
async function registerWithEmail(email, password, displayName) {
    const name = displayName.trim().slice(0, 16) || "Jucător";
    await auth.authStateReady();
    const current = auth.currentUser;
    if (current?.isAnonymous) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setPersistence"])(auth, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserLocalPersistence"]);
        const credential = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmailAuthProvider"].credential(email, password);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linkWithCredential"])(current, credential);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProfile"])(result.user, {
            displayName: name
        });
        await persistProfile(result.user, name);
        return result.user;
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setPersistence"])(auth, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserLocalPersistence"]);
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createUserWithEmailAndPassword"])(auth, email, password);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProfile"])(result.user, {
        displayName: name
    });
    await persistProfile(result.user, name);
    return result.user;
}
async function loginWithEmail(email, password) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setPersistence"])(auth, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserLocalPersistence"]);
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signInWithEmailAndPassword"])(auth, email, password);
    await persistProfile(result.user);
    return result.user;
}
async function loginWithGoogle() {
    const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleAuthProvider"]();
    await auth.authStateReady();
    const current = auth.currentUser;
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setPersistence"])(auth, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserLocalPersistence"]);
    if (current?.isAnonymous) {
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linkWithPopup"])(current, provider);
            await persistProfile(result.user, result.user.displayName ?? undefined);
            return result.user;
        } catch (err) {
            const code = typeof err === "object" && err && "code" in err ? String(err.code) : "";
            if (code !== "auth/credential-already-in-use" && code !== "auth/email-already-in-use") throw err;
        }
    }
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signInWithPopup"])(auth, provider);
    await persistProfile(result.user, result.user.displayName ?? undefined);
    return result.user;
}
async function logout() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])(auth);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setPersistence"])(auth, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserSessionPersistence"]);
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/territories.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_TERRITORIES_URL",
    ()=>DEFAULT_TERRITORIES_URL,
    "loadTerritories",
    ()=>loadTerritories,
    "useTerritories",
    ()=>useTerritories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const DEFAULT_TERRITORIES_URL = "/data/territories.json";
// o singură încărcare pe fișier (harta și pagina de joc folosesc aceleași date)
const cache = new Map();
function loadTerritories(url) {
    let p = cache.get(url);
    if (!p) {
        p = fetch(url).then((r)=>{
            if (!r.ok) throw new Error(`HTTP ${r.status}`);
            return r.json();
        }).then((d)=>d.territories);
        p.catch(()=>cache.delete(url));
        cache.set(url, p);
    }
    return p;
}
function useTerritories(url = DEFAULT_TERRITORIES_URL) {
    _s();
    const [territories, setTerritories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTerritories.useEffect": ()=>{
            let cancelled = false;
            loadTerritories(url).then({
                "useTerritories.useEffect": (t)=>!cancelled && setTerritories(t)
            }["useTerritories.useEffect"]).catch({
                "useTerritories.useEffect": (e)=>!cancelled && setError(String(e))
            }["useTerritories.useEffect"]);
            return ({
                "useTerritories.useEffect": ()=>{
                    cancelled = true;
                }
            })["useTerritories.useEffect"];
        }
    }["useTerritories.useEffect"], [
        url
    ]);
    return {
        territories,
        error
    };
}
_s(useTerritories, "hm7XZ9mOURjcz9AdkVcZJYoQuGc=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/BucharestMap3D.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BucharestMap3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Harta 3D în stil ConQUIZtador.
 *  - teritoriile vin din /data/territories.json (scripts/build_territories.py)
 *  - allowedDistricts: dacă e dat, doar acele teritorii pot fi alese (pulsează);
 *    restul teritoriilor libere sunt întunecate și nu răspund la click
 *  - animații: săgeata cade pe teritoriul ales, cucerirea face săritură + val de culoare
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$useCursor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/useCursor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$territories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/territories.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// ───────────────────────── stil ─────────────────────────
const DEPTH = 0.32;
const BEVEL = 0.05;
const UNOWNED_TOP = '#efe2a8';
const UNOWNED_SIDE = '#8a6a3a';
const DIMMED_TOP = '#44514a';
const DIMMED_SIDE = '#2a3430';
function easeOutBounce(x) {
    const n1 = 7.5625;
    const d1 = 2.75;
    if (x < 1 / d1) return n1 * x * x;
    if (x < 2 / d1) return n1 * (x -= 1.5 / d1) * x + 0.75;
    if (x < 2.5 / d1) return n1 * (x -= 2.25 / d1) * x + 0.9375;
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
}
// ───────────────────────── emblemă ─────────────────────────
function Emblem({ color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "46",
        height: "46",
        viewBox: "0 0 48 48",
        style: {
            filter: 'drop-shadow(0 2px 3px rgba(0,0,0,.55))'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                    id: "emb-g",
                    cx: "35%",
                    cy: "30%",
                    r: "80%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0",
                            stopColor: "#fff3c4"
                        }, void 0, false, {
                            fileName: "[project]/components/BucharestMap3D.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "1",
                            stopColor: "#d9a73a"
                        }, void 0, false, {
                            fileName: "[project]/components/BucharestMap3D.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BucharestMap3D.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/BucharestMap3D.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "24",
                cy: "24",
                r: "22",
                fill: "url(#emb-g)",
                stroke: "#f7e08f",
                strokeWidth: "2.5"
            }, void 0, false, {
                fileName: "[project]/components/BucharestMap3D.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "24",
                cy: "24",
                r: "17.5",
                fill: "none",
                stroke: color,
                strokeWidth: "2",
                opacity: ".9"
            }, void 0, false, {
                fileName: "[project]/components/BucharestMap3D.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 33V21h4v-3h3v3h2v-7h6v7h2v-3h3v3h4v12z",
                fill: "#5a3a12"
            }, void 0, false, {
                fileName: "[project]/components/BucharestMap3D.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22 33v-5a2 2 0 0 1 4 0v5z",
                fill: "#f3dc92"
            }, void 0, false, {
                fileName: "[project]/components/BucharestMap3D.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/BucharestMap3D.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_c = Emblem;
function OwnerTag({ name, color, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            pointerEvents: 'none'
        },
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 11,
                    fontWeight: 600,
                    color: '#fff',
                    textShadow: '0 1px 2px rgba(0,0,0,.9)',
                    whiteSpace: 'nowrap',
                    opacity: 0.95
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/components/BucharestMap3D.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, this),
            name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 13,
                    fontWeight: 700,
                    color: '#fff',
                    textShadow: '0 1px 2px rgba(0,0,0,.9), 0 0 4px rgba(0,0,0,.6)',
                    whiteSpace: 'nowrap'
                },
                children: name
            }, void 0, false, {
                fileName: "[project]/components/BucharestMap3D.tsx",
                lineNumber: 95,
                columnNumber: 9
            }, this),
            color && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Emblem, {
                color: color
            }, void 0, false, {
                fileName: "[project]/components/BucharestMap3D.tsx",
                lineNumber: 107,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/BucharestMap3D.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_c1 = OwnerTag;
// ───────────────────────── săgeata ─────────────────────────
function TargetArrow({ x, z }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "TargetArrow.useFrame": (state)=>{
            const g = ref.current;
            if (!g) return;
            const now = state.clock.elapsedTime;
            if (start.current === null) start.current = now;
            const t = now - start.current;
            // cade de sus și ricoșează, apoi plutește
            const DROP = 0.55;
            const drop = t < DROP ? (1 - easeOutBounce(t / DROP)) * 5 : 0;
            const bob = t < DROP ? 0 : Math.sin((t - DROP) * 3) * 0.22;
            g.position.y = DEPTH + 0.95 + drop + bob;
        }
    }["TargetArrow.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: [
            x,
            0,
            z
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
            ref: ref,
            position: [
                0,
                DEPTH + 6,
                0
            ],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    rotation: [
                        Math.PI,
                        0,
                        0
                    ],
                    position: [
                        0,
                        -0.35,
                        0
                    ],
                    castShadow: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("coneGeometry", {
                            args: [
                                0.55,
                                0.9,
                                24
                            ]
                        }, void 0, false, {
                            fileName: "[project]/components/BucharestMap3D.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                            color: "#c4452b",
                            roughness: 0.45,
                            metalness: 0.1
                        }, void 0, false, {
                            fileName: "[project]/components/BucharestMap3D.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BucharestMap3D.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    position: [
                        0,
                        0.65,
                        0
                    ],
                    castShadow: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                            args: [
                                0.2,
                                0.2,
                                1.1,
                                20
                            ]
                        }, void 0, false, {
                            fileName: "[project]/components/BucharestMap3D.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                            color: "#d9583a",
                            roughness: 0.45,
                            metalness: 0.1
                        }, void 0, false, {
                            fileName: "[project]/components/BucharestMap3D.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BucharestMap3D.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/BucharestMap3D.tsx",
            lineNumber: 133,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/BucharestMap3D.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
_s(TargetArrow, "zt398SskeQXmM9m/0+1bKewQGOk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c2 = TargetArrow;
// ───────────────────────── un teritoriu ─────────────────────────
function Territory3D({ t, index, owner, isHovered, isSelected, dimmed, pulsing, selectable, onHover, onSelect }) {
    _s1();
    const lift = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const topMat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const baseY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(-1.6);
    const ownerKey = owner?.color ?? '';
    const prevOwnerKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(ownerKey);
    const popStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const geometry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Territory3D.useMemo[geometry]": ()=>{
            const shape = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shape"](t.polygon.map({
                "Territory3D.useMemo[geometry]": ([x, y])=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](x, y)
            }["Territory3D.useMemo[geometry]"]));
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExtrudeGeometry"](shape, {
                depth: DEPTH,
                curveSegments: 1,
                bevelEnabled: true,
                bevelThickness: BEVEL,
                bevelSize: BEVEL,
                bevelOffset: -BEVEL,
                bevelSegments: 2
            });
        }
    }["Territory3D.useMemo[geometry]"], [
        t.polygon
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Territory3D.useEffect": ()=>({
                "Territory3D.useEffect": ()=>geometry.dispose()
            })["Territory3D.useEffect"]
    }["Territory3D.useEffect"], [
        geometry
    ]);
    const { top, side } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Territory3D.useMemo": ()=>{
            if (owner) {
                const base = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](owner.color);
                return {
                    top: base.clone().lerp(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]('#ffffff'), 0.1),
                    side: base.clone().multiplyScalar(0.5)
                };
            }
            if (dimmed) return {
                top: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](DIMMED_TOP),
                side: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](DIMMED_SIDE)
            };
            return {
                top: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](UNOWNED_TOP),
                side: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](UNOWNED_SIDE)
            };
        }
    }["Territory3D.useMemo"], [
        owner,
        dimmed
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "Territory3D.useLayoutEffect": ()=>{
            if (lift.current) lift.current.position.y = -1.6;
        }
    }["Territory3D.useLayoutEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "Territory3D.useFrame": (state, delta)=>{
            const g = lift.current;
            if (!g) return;
            const now = state.clock.elapsedTime;
            // a primit un proprietar acum => animația de cucerire
            if (prevOwnerKey.current !== ownerKey) {
                if (!prevOwnerKey.current && ownerKey) popStart.current = now;
                prevOwnerKey.current = ownerKey;
            }
            const t0 = popStart.current === null ? Infinity : now - popStart.current;
            // aparițe la încărcare + ridicare la hover/selecție
            const appear = now - index * 0.07;
            const target = appear < 0 ? -1.6 : isSelected ? 0.3 : isHovered && selectable ? 0.14 : 0;
            baseY.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].damp(baseY.current, target, 9, delta);
            // săritură cu ricoșeu + flash la cucerire
            let bounce = 0;
            let flash = 0;
            if (t0 < 1.6) {
                bounce = 0.9 * Math.exp(-3 * t0) * Math.abs(Math.cos(7 * t0));
                flash = 1.4 * Math.exp(-3.5 * t0);
            }
            g.position.y = baseY.current + bounce;
            const m = topMat.current;
            if (m) {
                const base = isSelected ? 0.28 : isHovered && selectable ? 0.16 : 0.04;
                const pulse = pulsing && !isSelected ? 0.06 + 0.05 * Math.sin(now * 4 + index) : 0;
                m.emissiveIntensity = base + pulse + flash;
            }
            // val de culoare care se extinde din centrul teritoriului
            const r = ring.current;
            if (r) {
                if (t0 < 1.1) {
                    r.visible = true;
                    const s = 0.6 + t0 * 9;
                    r.scale.set(s, s, s);
                    r.material.opacity = Math.max(0, 0.9 * (1 - t0 / 1.1));
                } else if (r.visible) {
                    r.visible = false;
                }
            }
        }
    }["Territory3D.useFrame"]);
    const [lx, ly] = t.label;
    const showTag = !!owner || isHovered && selectable || isSelected;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: lift,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                geometry: geometry,
                rotation: [
                    -Math.PI / 2,
                    0,
                    0
                ],
                castShadow: true,
                receiveShadow: true,
                onPointerOver: (e)=>{
                    e.stopPropagation();
                    onHover(selectable ? t.id : null);
                },
                onPointerOut: ()=>onHover(null),
                onClick: (e)=>{
                    if (e.delta > 4) return; // drag (rotire cameră), nu click
                    e.stopPropagation();
                    if (selectable) onSelect(t);
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        ref: topMat,
                        attach: "material-0",
                        color: top,
                        emissive: top,
                        emissiveIntensity: 0.04,
                        roughness: 0.55,
                        metalness: 0.05
                    }, void 0, false, {
                        fileName: "[project]/components/BucharestMap3D.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        attach: "material-1",
                        color: side,
                        roughness: 0.8
                    }, void 0, false, {
                        fileName: "[project]/components/BucharestMap3D.tsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BucharestMap3D.tsx",
                lineNumber: 261,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: ring,
                position: [
                    lx,
                    DEPTH + 0.08,
                    -ly
                ],
                rotation: [
                    -Math.PI / 2,
                    0,
                    0
                ],
                visible: false,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ringGeometry", {
                        args: [
                            0.8,
                            1,
                            48
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/BucharestMap3D.tsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: top,
                        transparent: true,
                        opacity: 0,
                        depthWrite: false
                    }, void 0, false, {
                        fileName: "[project]/components/BucharestMap3D.tsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BucharestMap3D.tsx",
                lineNumber: 290,
                columnNumber: 7
            }, this),
            showTag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                position: [
                    lx,
                    DEPTH + 0.35,
                    -ly
                ],
                center: true,
                distanceFactor: 15,
                zIndexRange: [
                    10,
                    0
                ],
                style: {
                    pointerEvents: 'none',
                    userSelect: 'none'
                },
                children: owner ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OwnerTag, {
                    name: owner.name,
                    color: owner.color,
                    label: isHovered || isSelected ? t.name : undefined
                }, void 0, false, {
                    fileName: "[project]/components/BucharestMap3D.tsx",
                    lineNumber: 304,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OwnerTag, {
                    name: t.name
                }, void 0, false, {
                    fileName: "[project]/components/BucharestMap3D.tsx",
                    lineNumber: 306,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/BucharestMap3D.tsx",
                lineNumber: 296,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/BucharestMap3D.tsx",
        lineNumber: 260,
        columnNumber: 5
    }, this);
}
_s1(Territory3D, "5/LGkA8QQqSTQD2z8KpNf+9QFOE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c3 = Territory3D;
// ───────────────────────── scena ─────────────────────────
function Scene({ territories, selectedDistrict, targetDistrict, allowedDistricts, zones, playersData, onSelect }) {
    _s2();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$useCursor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCursor"])(!!hovered);
    const allowedSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Scene.useMemo[allowedSet]": ()=>allowedDistricts ? new Set(allowedDistricts) : null
    }["Scene.useMemo[allowedSet]"], [
        allowedDistricts
    ]);
    const arrowTarget = territories.find((t)=>t.id === (targetDistrict ?? selectedDistrict));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hemisphereLight", {
                args: [
                    '#fff4d6',
                    '#3a2610',
                    0.95
                ]
            }, void 0, false, {
                fileName: "[project]/components/BucharestMap3D.tsx",
                lineNumber: 341,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                position: [
                    -9,
                    20,
                    12
                ],
                intensity: 1.7,
                castShadow: true,
                "shadow-mapSize-width": 2048,
                "shadow-mapSize-height": 2048,
                "shadow-camera-left": -16,
                "shadow-camera-right": 16,
                "shadow-camera-top": 16,
                "shadow-camera-bottom": -16,
                "shadow-camera-near": 1,
                "shadow-camera-far": 60,
                "shadow-bias": -0.0004
            }, void 0, false, {
                fileName: "[project]/components/BucharestMap3D.tsx",
                lineNumber: 342,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                rotation: [
                    -Math.PI / 2,
                    0,
                    0
                ],
                position: [
                    0,
                    -BEVEL - 0.01,
                    0
                ],
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                        args: [
                            80,
                            80
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/BucharestMap3D.tsx",
                        lineNumber: 358,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("shadowMaterial", {
                        opacity: 0.38
                    }, void 0, false, {
                        fileName: "[project]/components/BucharestMap3D.tsx",
                        lineNumber: 359,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BucharestMap3D.tsx",
                lineNumber: 357,
                columnNumber: 7
            }, this),
            territories.map((t, i)=>{
                const ownerUid = zones[t.id];
                const owner = ownerUid ? playersData[ownerUid] : undefined;
                const allowed = !allowedSet || allowedSet.has(t.id);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Territory3D, {
                    t: t,
                    index: i,
                    owner: owner,
                    isHovered: hovered === t.id,
                    isSelected: selectedDistrict === t.id,
                    dimmed: !!allowedSet && !allowed && !owner,
                    pulsing: !!allowedSet && allowed,
                    selectable: allowed,
                    onHover: setHovered,
                    onSelect: onSelect
                }, t.id, false, {
                    fileName: "[project]/components/BucharestMap3D.tsx",
                    lineNumber: 367,
                    columnNumber: 11
                }, this);
            }),
            arrowTarget && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TargetArrow, {
                x: arrowTarget.label[0],
                z: -arrowTarget.label[1]
            }, arrowTarget.id, false, {
                fileName: "[project]/components/BucharestMap3D.tsx",
                lineNumber: 383,
                columnNumber: 23
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
                makeDefault: true,
                enablePan: false,
                enableDamping: true,
                dampingFactor: 0.08,
                minDistance: 20,
                maxDistance: 46,
                minPolarAngle: 0.35,
                maxPolarAngle: 1.2,
                minAzimuthAngle: -0.6,
                maxAzimuthAngle: 0.6,
                target: [
                    0,
                    0,
                    0
                ]
            }, void 0, false, {
                fileName: "[project]/components/BucharestMap3D.tsx",
                lineNumber: 385,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s2(Scene, "a2QgsNXfTwPPlHHMMpUN1D9Le4c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$useCursor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCursor"]
    ];
});
_c4 = Scene;
function BucharestMap3D({ dataUrl = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$territories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_TERRITORIES_URL"], onDistrictClick, selectedDistrict, targetDistrict, allowedDistricts, zones = {}, playersData = {} }) {
    _s3();
    const { territories, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$territories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTerritories"])(dataUrl);
    const handleSelect = (t)=>onDistrictClick?.({
            id: t.id,
            properties: {
                name: t.name,
                sector: t.sector
            },
            neighbors: t.neighbors
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'relative',
            width: '100%',
            height: '100%',
            minHeight: 360,
            overflow: 'hidden',
            background: 'var(--map-bg, radial-gradient(ellipse at 50% 38%, #1d3b29 0%, #122419 48%, #060d09 100%))'
        },
        children: [
            !territories && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,240,200,.8)'
                },
                children: "Se încarcă harta…"
            }, void 0, false, {
                fileName: "[project]/components/BucharestMap3D.tsx",
                lineNumber: 430,
                columnNumber: 9
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fca5a5'
                },
                children: [
                    "Nu s-a putut încărca harta (",
                    error,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/components/BucharestMap3D.tsx",
                lineNumber: 444,
                columnNumber: 9
            }, this),
            territories && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                shadows: true,
                flat: true,
                dpr: [
                    1,
                    2
                ],
                camera: {
                    position: [
                        0,
                        27,
                        21
                    ],
                    fov: 32,
                    near: 0.5,
                    far: 200
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Scene, {
                    territories: territories,
                    selectedDistrict: selectedDistrict,
                    targetDistrict: targetDistrict,
                    allowedDistricts: allowedDistricts,
                    zones: zones,
                    playersData: playersData,
                    onSelect: handleSelect
                }, void 0, false, {
                    fileName: "[project]/components/BucharestMap3D.tsx",
                    lineNumber: 460,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/BucharestMap3D.tsx",
                lineNumber: 459,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    boxShadow: 'inset 0 0 120px 30px rgba(0,0,0,.55)'
                }
            }, void 0, false, {
                fileName: "[project]/components/BucharestMap3D.tsx",
                lineNumber: 472,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/BucharestMap3D.tsx",
        lineNumber: 419,
        columnNumber: 5
    }, this);
}
_s3(BucharestMap3D, "SDiNQDytZbWNw9/Y2TrqLmp2utY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$territories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTerritories"]
    ];
});
_c5 = BucharestMap3D;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Emblem");
__turbopack_context__.k.register(_c1, "OwnerTag");
__turbopack_context__.k.register(_c2, "TargetArrow");
__turbopack_context__.k.register(_c3, "Territory3D");
__turbopack_context__.k.register(_c4, "Scene");
__turbopack_context__.k.register(_c5, "BucharestMap3D");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/chat.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "badge": "chat-module__Y1g7Zq__badge",
  "close": "chat-module__Y1g7Zq__close",
  "empty": "chat-module__Y1g7Zq__empty",
  "error": "chat-module__Y1g7Zq__error",
  "floating": "chat-module__Y1g7Zq__floating",
  "form": "chat-module__Y1g7Zq__form",
  "header": "chat-module__Y1g7Zq__header",
  "inlineWrap": "chat-module__Y1g7Zq__inlineWrap",
  "input": "chat-module__Y1g7Zq__input",
  "list": "chat-module__Y1g7Zq__list",
  "mine": "chat-module__Y1g7Zq__mine",
  "msg": "chat-module__Y1g7Zq__msg",
  "panel": "chat-module__Y1g7Zq__panel",
  "send": "chat-module__Y1g7Zq__send",
  "sys": "chat-module__Y1g7Zq__sys",
  "toggle": "chat-module__Y1g7Zq__toggle",
});
}),
"[project]/components/Chat.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Chat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/firebase.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/chat.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const MAX_LEN = 200;
function Chat({ roomCode, uid, name, color, variant = "inline" }) {
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(variant === "inline");
    const [seen, setSeen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const listRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastSent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // pe ecrane late, chatul din joc e deschis implicit
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Chat.useEffect": ()=>{
            if (variant === "floating" && window.innerWidth >= 1100) setOpen(true);
        }
    }["Chat.useEffect"], [
        variant
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Chat.useEffect": ()=>{
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "games", roomCode, "messages"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])("createdAt", "asc"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limitToLast"])(100));
            const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(q, {
                "Chat.useEffect.unsub": (snap)=>{
                    setMessages(snap.docs.map({
                        "Chat.useEffect.unsub": (d)=>{
                            const x = d.data({
                                serverTimestamps: "estimate"
                            });
                            return {
                                id: d.id,
                                type: x.type === "system" ? "system" : "chat",
                                uid: String(x.uid ?? ""),
                                name: String(x.name ?? ""),
                                color: String(x.color ?? ""),
                                text: String(x.text ?? "")
                            };
                        }
                    }["Chat.useEffect.unsub"]));
                    setError(null);
                }
            }["Chat.useEffect.unsub"], {
                "Chat.useEffect.unsub": (err)=>{
                    console.error("Chat:", err);
                    setError("Chatul nu e disponibil (verifică regulile Firestore).");
                }
            }["Chat.useEffect.unsub"]);
            return ({
                "Chat.useEffect": ()=>unsub()
            })["Chat.useEffect"];
        }
    }["Chat.useEffect"], [
        roomCode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Chat.useEffect": ()=>{
            const el = listRef.current;
            if (el) el.scrollTop = el.scrollHeight;
            if (open) setSeen(messages.length);
        }
    }["Chat.useEffect"], [
        messages,
        open
    ]);
    const send = async ()=>{
        const body = text.trim().slice(0, MAX_LEN);
        if (!body || !uid) return;
        const now = Date.now();
        if (now - lastSent.current < 600) return; // anti-spam
        lastSent.current = now;
        setText("");
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "games", roomCode, "messages"), {
                type: "chat",
                uid,
                name,
                color,
                text: body,
                createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
            });
        } catch (e) {
            console.error("Chat send:", e);
            setError("Mesajul nu a putut fi trimis.");
        }
    };
    const unread = open ? 0 : Math.max(0, messages.length - seen);
    if (variant === "floating" && !open) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].floating,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toggle,
                onClick: ()=>setOpen(true),
                children: [
                    "Chat",
                    unread > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badge,
                        children: unread > 9 ? "9+" : unread
                    }, void 0, false, {
                        fileName: "[project]/components/Chat.tsx",
                        lineNumber: 105,
                        columnNumber: 26
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Chat.tsx",
                lineNumber: 103,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Chat.tsx",
            lineNumber: 102,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: variant === "floating" ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].floating : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inlineWrap,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Chat"
                        }, void 0, false, {
                            fileName: "[project]/components/Chat.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this),
                        variant === "floating" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].close,
                            onClick: ()=>setOpen(false),
                            "aria-label": "Închide chatul",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/components/Chat.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Chat.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].list,
                    ref: listRef,
                    children: [
                        messages.length === 0 && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].empty,
                            children: "Niciun mesaj încă."
                        }, void 0, false, {
                            fileName: "[project]/components/Chat.tsx",
                            lineNumber: 124,
                            columnNumber: 47
                        }, this),
                        messages.map((m)=>m.type === "system" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sys,
                                children: m.text
                            }, m.id, false, {
                                fileName: "[project]/components/Chat.tsx",
                                lineNumber: 127,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].msg} ${m.uid === uid ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mine : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        style: {
                                            color: m.color || "var(--gold)"
                                        },
                                        children: m.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/Chat.tsx",
                                        lineNumber: 132,
                                        columnNumber: 17
                                    }, this),
                                    " ",
                                    m.text
                                ]
                            }, m.id, true, {
                                fileName: "[project]/components/Chat.tsx",
                                lineNumber: 131,
                                columnNumber: 15
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Chat.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                    children: error
                }, void 0, false, {
                    fileName: "[project]/components/Chat.tsx",
                    lineNumber: 138,
                    columnNumber: 19
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                            value: text,
                            maxLength: MAX_LEN,
                            placeholder: "Scrie un mesaj…",
                            onChange: (e)=>setText(e.target.value),
                            onKeyDown: (e)=>{
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    send();
                                }
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/Chat.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].send,
                            onClick: send,
                            disabled: !text.trim(),
                            children: "Trimite"
                        }, void 0, false, {
                            fileName: "[project]/components/Chat.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Chat.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Chat.tsx",
            lineNumber: 113,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Chat.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
_s(Chat, "/k+Eh3zvor5vUbuqxeCkEWTnzRw=");
_c = Chat;
var _c;
__turbopack_context__.k.register(_c, "Chat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/game-utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MAX_PLAYERS",
    ()=>MAX_PLAYERS,
    "PALETTE",
    ()=>PALETTE,
    "allowedTerritories",
    ()=>allowedTerritories,
    "cleanName",
    ()=>cleanName,
    "colorFor",
    ()=>colorFor,
    "generateRoomCode",
    ()=>generateRoomCode,
    "nextFreeColor",
    ()=>nextFreeColor,
    "orderPlayers",
    ()=>orderPlayers
]);
const MAX_PLAYERS = 3;
const PALETTE = [
    "#e0762b",
    "#2f9e4a",
    "#e3b72a",
    "#3b82f6",
    "#b455d6",
    "#d9446a"
];
// camerele vechi au salvat culori ca "emerald"/"sky"
const NAMED_COLORS = {
    emerald: "#2f9e4a",
    sky: "#3b82f6",
    orange: "#e0762b",
    yellow: "#e3b72a",
    red: "#d9443a",
    purple: "#b455d6",
    pink: "#d9446a"
};
function colorFor(player, index = 0) {
    if (player.color?.startsWith("#")) return player.color;
    return NAMED_COLORS[player.color] ?? PALETTE[index % PALETTE.length];
}
function nextFreeColor(players) {
    const used = new Set(Object.values(players).map((p)=>p.color));
    return PALETTE.find((c)=>!used.has(c)) ?? PALETTE[0];
}
function orderPlayers(players, hostId) {
    return Object.entries(players ?? {}).sort(([a, pa], [b, pb])=>{
        if (a === hostId) return -1;
        if (b === hostId) return 1;
        return (pa.joinedAt?.seconds ?? 0) - (pb.joinedAt?.seconds ?? 0);
    });
}
// fără 0/O/1/I ca să nu se confunde când dictezi codul
const CODE_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
function generateRoomCode(len = 5) {
    return Array.from({
        length: len
    }, ()=>CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]).join("");
}
function cleanName(raw, fallback) {
    const n = raw.trim().slice(0, 16);
    return n || fallback;
}
function allowedTerritories(territories, zones, uid) {
    const free = territories.filter((t)=>!zones[t.id]);
    const mine = new Set(territories.filter((t)=>zones[t.id] === uid).map((t)=>t.id));
    if (mine.size === 0) return free.map((t)=>t.id);
    const adjacent = free.filter((t)=>t.neighbors.some((n)=>mine.has(n)));
    return (adjacent.length ? adjacent : free).map((t)=>t.id);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/game/[roomCode]/game.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "action": "game-module__iz5jkW__action",
  "actionInfo": "game-module__iz5jkW__actionInfo",
  "actionLabel": "game-module__iz5jkW__actionLabel",
  "actionTitle": "game-module__iz5jkW__actionTitle",
  "bottom": "game-module__iz5jkW__bottom",
  "brand": "game-module__iz5jkW__brand",
  "btn": "game-module__iz5jkW__btn",
  "card": "game-module__iz5jkW__card",
  "cardActive": "game-module__iz5jkW__cardActive",
  "cardBody": "game-module__iz5jkW__cardBody",
  "cardName": "game-module__iz5jkW__cardName",
  "cardTab": "game-module__iz5jkW__cardTab",
  "cardYou": "game-module__iz5jkW__cardYou",
  "cards": "game-module__iz5jkW__cards",
  "center": "game-module__iz5jkW__center",
  "leave": "game-module__iz5jkW__leave",
  "mapArea": "game-module__iz5jkW__mapArea",
  "meta": "game-module__iz5jkW__meta",
  "room": "game-module__iz5jkW__room",
  "root": "game-module__iz5jkW__root",
  "score": "game-module__iz5jkW__score",
  "timer": "game-module__iz5jkW__timer",
  "timerBar": "game-module__iz5jkW__timerBar",
  "timerUrgent": "game-module__iz5jkW__timerUrgent",
  "top": "game-module__iz5jkW__top",
  "turnBadge": "game-module__iz5jkW__turnBadge",
  "turnMine": "game-module__iz5jkW__turnMine",
  "urgent": "game-module__iz5jkW__urgent",
});
}),
"[project]/app/game/[roomCode]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GamePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/firebase.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BucharestMap3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BucharestMap3D.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Chat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$territories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/territories.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$game$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/game-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/game/[roomCode]/game.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
const TURN_SECONDS = 10; // timp pentru a alege un teritoriu
const GRACE_SECONDS = 5; // după atât, gazda alege în locul unui jucător deconectat
const CLICK_AGAIN_CONFIRMS = true; // al doilea click pe teritoriul marcat = confirmare (la fel ca Enter)
function GamePage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const roomCode = params.roomCode;
    const [game, setGame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uid, setUid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // teritoriul "marcat" cu săgeata
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [claiming, setClaiming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [remaining, setRemaining] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(TURN_SECONDS);
    const claimingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const firedFor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(-1); // tura pentru care s-a declanșat deja alegerea automată
    const { territories } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$territories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTerritories"])();
    // ───────────── date din Firestore ─────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GamePage.useEffect": ()=>{
            const unsub = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"].onAuthStateChanged({
                "GamePage.useEffect.unsub": (user)=>setUid(user?.uid ?? "")
            }["GamePage.useEffect.unsub"]);
            return ({
                "GamePage.useEffect": ()=>unsub()
            })["GamePage.useEffect"];
        }
    }["GamePage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GamePage.useEffect": ()=>{
            if (!roomCode) return;
            const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "games", roomCode), {
                "GamePage.useEffect.unsub": (snap)=>{
                    setGame(snap.exists() ? snap.data() : null);
                    setLoading(false);
                }
            }["GamePage.useEffect.unsub"], {
                "GamePage.useEffect.unsub": (err)=>{
                    console.error("Firestore:", err);
                    setLoading(false);
                }
            }["GamePage.useEffect.unsub"]);
            return ({
                "GamePage.useEffect": ()=>unsub()
            })["GamePage.useEffect"];
        }
    }["GamePage.useEffect"], [
        roomCode
    ]);
    // ───────────── valori derivate (sigure și cât timp `game` e încă null) ─────────────
    const ordered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GamePage.useMemo[ordered]": ()=>game ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$game$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderPlayers"])(game.players ?? {}, game.hostId) : []
    }["GamePage.useMemo[ordered]"], [
        game
    ]);
    const playersData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GamePage.useMemo[playersData]": ()=>Object.fromEntries(ordered.map({
                "GamePage.useMemo[playersData]": ([id, p], i)=>[
                        id,
                        {
                            name: p.name || "Jucător",
                            color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$game$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorFor"])(p, i)
                        }
                    ]
            }["GamePage.useMemo[playersData]"]))
    }["GamePage.useMemo[playersData]"], [
        ordered
    ]);
    const zones = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GamePage.useMemo[zones]": ()=>game?.zones ?? {}
    }["GamePage.useMemo[zones]"], [
        game
    ]);
    const turnUid = game ? game.currentTurn || game.hostId : "";
    const turnNumber = game?.turnNumber ?? 0;
    const myTurn = !!uid && turnUid === uid;
    const isHost = !!game && !!uid && game.hostId === uid;
    const finished = !!territories && territories.every((t)=>!!zones[t.id]);
    // teritoriile pe care le pot alege acum (null = nu e rândul meu / fără restricții)
    const allowed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GamePage.useMemo[allowed]": ()=>territories && myTurn && !finished ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$game$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allowedTerritories"])(territories, zones, uid) : null
    }["GamePage.useMemo[allowed]"], [
        territories,
        myTurn,
        finished,
        zones,
        uid
    ]);
    // ───────────── alegerea unui teritoriu (tranzacție = fără dubluri) ─────────────
    const claim = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GamePage.useCallback[claim]": async (forUid, preferred, auto)=>{
            if (!territories || claimingRef.current) return;
            claimingRef.current = true;
            setClaiming(true);
            let claimedId = "";
            let claimedBy = "";
            try {
                const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "games", roomCode);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runTransaction"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], {
                    "GamePage.useCallback[claim]": async (tx)=>{
                        const snap = await tx.get(ref);
                        if (!snap.exists()) return;
                        const g = snap.data();
                        // altcineva a ales deja (ex. gazda după timeout) sau nu mai e rândul lui
                        if ((g.currentTurn || g.hostId) !== forUid) return;
                        const free = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$game$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allowedTerritories"])(territories, g.zones ?? {}, forUid);
                        if (free.length === 0) return;
                        let pick = preferred && free.includes(preferred) ? preferred : null;
                        if (!pick) {
                            if (!auto) return; // alegere manuală nepermisă (nu e vecin)
                            pick = free[Math.floor(Math.random() * free.length)];
                        }
                        const uids = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$game$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderPlayers"])(g.players ?? {}, g.hostId).map({
                            "GamePage.useCallback[claim].uids": ([id])=>id
                        }["GamePage.useCallback[claim].uids"]);
                        const idx = uids.indexOf(forUid);
                        if (idx === -1) return;
                        tx.update(ref, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldPath"]("zones", pick), forUid, "currentTurn", uids[(idx + 1) % uids.length], "round", (g.round ?? 1) + (idx === uids.length - 1 ? 1 : 0), "turnNumber", (g.turnNumber ?? 0) + 1, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldPath"]("players", forUid, "score"), (g.players?.[forUid]?.score ?? 0) + 100);
                        claimedId = pick;
                        claimedBy = g.players?.[forUid]?.name ?? "Jucător";
                    }
                }["GamePage.useCallback[claim]"]);
                if (claimedId) {
                    setSelected(null);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "games", roomCode, "messages"), {
                        type: "system",
                        uid: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"].currentUser?.uid ?? forUid,
                        name: claimedBy,
                        color: "",
                        text: `${claimedBy} a cucerit ${claimedId}${auto ? " (ales automat)" : ""}.`,
                        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
                    }).catch({
                        "GamePage.useCallback[claim]": (e)=>console.error("Mesaj de sistem:", e)
                    }["GamePage.useCallback[claim]"]);
                }
            } catch (err) {
                console.error("Nu s-a putut cuceri teritoriul:", err);
            } finally{
                claimingRef.current = false;
                setClaiming(false);
            }
        }
    }["GamePage.useCallback[claim]"], [
        territories,
        roomCode
    ]);
    // cele mai recente valori, citite din intervale și din ascultătorul de tastatură
    const latest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        myTurn,
        isHost,
        turnUid,
        selected,
        uid,
        allowed,
        claim
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GamePage.useEffect": ()=>{
            latest.current = {
                myTurn,
                isHost,
                turnUid,
                selected,
                uid,
                allowed,
                claim
            };
        }
    }["GamePage.useEffect"]);
    const confirmPinned = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GamePage.useCallback[confirmPinned]": ()=>{
            const l = latest.current;
            if (l.myTurn && l.selected && l.allowed?.includes(l.selected)) void l.claim(l.uid, l.selected, false);
        }
    }["GamePage.useCallback[confirmPinned]"], []);
    // ───────────── cronometrul de 10 secunde ─────────────
    const hasGame = !!game;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GamePage.useEffect": ()=>{
            setSelected(null); // marcajul nu trece la tura următoare
        }
    }["GamePage.useEffect"], [
        turnNumber
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GamePage.useEffect": ()=>{
            if (!hasGame || finished) return;
            const end = Date.now() + TURN_SECONDS * 1000;
            setRemaining(TURN_SECONDS);
            const id = setInterval({
                "GamePage.useEffect.id": ()=>{
                    const left = (end - Date.now()) / 1000;
                    setRemaining(left);
                    if (firedFor.current === turnNumber) return;
                    const l = latest.current;
                    if (left <= 0 && l.myTurn) {
                        // timpul a expirat: se alege teritoriul marcat sau unul la întâmplare
                        firedFor.current = turnNumber;
                        void l.claim(l.uid, l.selected, true);
                    } else if (left <= -GRACE_SECONDS && l.isHost && !l.myTurn) {
                        // jucătorul curent nu a răspuns (deconectat?) => gazda alege în locul lui
                        firedFor.current = turnNumber;
                        void l.claim(l.turnUid, null, true);
                    }
                }
            }["GamePage.useEffect.id"], 200);
            return ({
                "GamePage.useEffect": ()=>clearInterval(id)
            })["GamePage.useEffect"];
        }
    }["GamePage.useEffect"], [
        turnNumber,
        finished,
        hasGame
    ]);
    // ───────────── Enter confirmă teritoriul marcat ─────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GamePage.useEffect": ()=>{
            const onKey = {
                "GamePage.useEffect.onKey": (e)=>{
                    if (e.key !== "Enter") return;
                    const el = e.target;
                    if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA")) return; // scrii în chat
                    e.preventDefault();
                    confirmPinned();
                }
            }["GamePage.useEffect.onKey"];
            window.addEventListener("keydown", onKey);
            return ({
                "GamePage.useEffect": ()=>window.removeEventListener("keydown", onKey)
            })["GamePage.useEffect"];
        }
    }["GamePage.useEffect"], [
        confirmPinned
    ]);
    const handleSelect = (d)=>{
        if (CLICK_AGAIN_CONFIRMS && myTurn && selected === d.id) {
            confirmPinned();
            return;
        }
        setSelected(d.id);
    };
    // ───────────── ecrane de stare ─────────────
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].center,
        children: "Se încarcă jocul…"
    }, void 0, false, {
        fileName: "[project]/app/game/[roomCode]/page.tsx",
        lineNumber: 231,
        columnNumber: 23
    }, this);
    if (!game) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].center,
        children: [
            "Camera ",
            roomCode,
            " nu există."
        ]
    }, void 0, true, {
        fileName: "[project]/app/game/[roomCode]/page.tsx",
        lineNumber: 232,
        columnNumber: 21
    }, this);
    const turnName = playersData[turnUid]?.name ?? "—";
    const me = uid ? playersData[uid] : undefined;
    const territoryCount = (id)=>Object.values(zones).filter((z)=>z === id).length;
    const winner = finished ? [
        ...ordered
    ].sort(([a, pa], [b, pb])=>territoryCount(b) - territoryCount(a) || (pb.score ?? 0) - (pa.score ?? 0))[0] : null;
    const pct = Math.max(0, Math.min(100, remaining / TURN_SECONDS * 100));
    const urgent = remaining <= 3;
    // textul din panoul de acțiune
    const selectedOwner = selected ? zones[selected] : undefined;
    let info;
    if (finished) info = "Toate teritoriile au fost cucerite.";
    else if (!myTurn) info = "Așteaptă să-ți vină rândul.";
    else if (selected && allowed?.includes(selected)) info = "Enter sau click din nou pentru a confirma.";
    else if (selected && selectedOwner) info = `Cucerit de ${playersData[selectedOwner]?.name ?? "alt jucător"}.`;
    else if (territories && territories.some((t)=>zones[t.id] === uid)) info = "Alege un teritoriu liber, vecin cu ale tale.";
    else info = "Alege orice teritoriu liber.";
    const canConfirm = myTurn && !finished && !claiming && !!selected && !!allowed?.includes(selected);
    let btnText = "Așteaptă-ți rândul";
    if (finished) btnText = "Joc încheiat";
    else if (myTurn) btnText = canConfirm ? "Cucerește (Enter)" : "Alege un teritoriu";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].root,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mapArea,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BucharestMap3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    selectedDistrict: selected,
                    onDistrictClick: handleSelect,
                    allowedDistricts: allowed,
                    zones: zones,
                    playersData: playersData
                }, void 0, false, {
                    fileName: "[project]/app/game/[roomCode]/page.tsx",
                    lineNumber: 266,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/game/[roomCode]/page.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].top,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brand,
                        children: [
                            "Con",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "spritz"
                            }, void 0, false, {
                                fileName: "[project]/app/game/[roomCode]/page.tsx",
                                lineNumber: 277,
                                columnNumber: 14
                            }, this),
                            "ädor",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].room,
                                children: roomCode
                            }, void 0, false, {
                                fileName: "[project]/app/game/[roomCode]/page.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/game/[roomCode]/page.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].turnBadge} ${myTurn && !finished ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].turnMine : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: finished ? "Final" : `Runda ${game.round ?? 1}`
                            }, void 0, false, {
                                fileName: "[project]/app/game/[roomCode]/page.tsx",
                                lineNumber: 282,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: finished ? `Câștigă ${winner ? playersData[winner[0]]?.name : "—"}` : myTurn ? "Rândul tău!" : `Rândul lui ${turnName}`
                            }, void 0, false, {
                                fileName: "[project]/app/game/[roomCode]/page.tsx",
                                lineNumber: 283,
                                columnNumber: 11
                            }, this),
                            !finished && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].timer,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].timerBar} ${urgent ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].timerUrgent : ""}`,
                                        style: {
                                            width: `${pct}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/game/[roomCode]/page.tsx",
                                        lineNumber: 292,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            Math.max(0, Math.ceil(remaining)),
                                            "s"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/game/[roomCode]/page.tsx",
                                        lineNumber: 293,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/game/[roomCode]/page.tsx",
                                lineNumber: 291,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/game/[roomCode]/page.tsx",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].leave,
                        children: "Ieși"
                    }, void 0, false, {
                        fileName: "[project]/app/game/[roomCode]/page.tsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/game/[roomCode]/page.tsx",
                lineNumber: 275,
                columnNumber: 7
            }, this),
            uid && game.players?.[uid] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                roomCode: roomCode,
                uid: uid,
                name: me?.name ?? "Jucător",
                color: me?.color ?? "#ffffff",
                variant: "floating"
            }, void 0, false, {
                fileName: "[project]/app/game/[roomCode]/page.tsx",
                lineNumber: 304,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bottom,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cards,
                        children: ordered.map(([id])=>{
                            const p = playersData[id];
                            const active = id === turnUid && !finished;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card} ${active ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardActive : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTab,
                                        style: {
                                            background: p.color
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardName,
                                                children: p.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/game/[roomCode]/page.tsx",
                                                lineNumber: 315,
                                                columnNumber: 19
                                            }, this),
                                            id === uid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardYou,
                                                children: "tu"
                                            }, void 0, false, {
                                                fileName: "[project]/app/game/[roomCode]/page.tsx",
                                                lineNumber: 316,
                                                columnNumber: 34
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/game/[roomCode]/page.tsx",
                                        lineNumber: 314,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardBody,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].score,
                                                children: game.players[id]?.score ?? 0
                                            }, void 0, false, {
                                                fileName: "[project]/app/game/[roomCode]/page.tsx",
                                                lineNumber: 319,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].meta,
                                                children: [
                                                    territoryCount(id),
                                                    " teritorii"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/game/[roomCode]/page.tsx",
                                                lineNumber: 320,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/game/[roomCode]/page.tsx",
                                        lineNumber: 318,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, id, true, {
                                fileName: "[project]/app/game/[roomCode]/page.tsx",
                                lineNumber: 313,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/game/[roomCode]/page.tsx",
                        lineNumber: 308,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].action,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionLabel,
                                children: "Cucerire"
                            }, void 0, false, {
                                fileName: "[project]/app/game/[roomCode]/page.tsx",
                                lineNumber: 328,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionTitle,
                                children: selected ?? "Niciun teritoriu"
                            }, void 0, false, {
                                fileName: "[project]/app/game/[roomCode]/page.tsx",
                                lineNumber: 329,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionInfo,
                                children: info
                            }, void 0, false, {
                                fileName: "[project]/app/game/[roomCode]/page.tsx",
                                lineNumber: 330,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btn,
                                disabled: !canConfirm,
                                onClick: confirmPinned,
                                children: claiming ? "Se salvează…" : btnText
                            }, void 0, false, {
                                fileName: "[project]/app/game/[roomCode]/page.tsx",
                                lineNumber: 331,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/game/[roomCode]/page.tsx",
                        lineNumber: 327,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/game/[roomCode]/page.tsx",
                lineNumber: 307,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/game/[roomCode]/page.tsx",
        lineNumber: 264,
        columnNumber: 5
    }, this);
}
_s(GamePage, "fFR4kcQNWR6F2jffM6S3jzbQqQQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$territories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTerritories"]
    ];
});
_c = GamePage;
var _c;
__turbopack_context__.k.register(_c, "GamePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_5cd248a5._.js.map