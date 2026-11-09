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
"[project]/app/ui.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bigCode": "ui-module__hjaCdq__bigCode",
  "brand": "ui-module__hjaCdq__brand",
  "btn": "ui-module__hjaCdq__btn",
  "btnGhost": "ui-module__hjaCdq__btnGhost",
  "codeInput": "ui-module__hjaCdq__codeInput",
  "dot": "ui-module__hjaCdq__dot",
  "empty": "ui-module__hjaCdq__empty",
  "error": "ui-module__hjaCdq__error",
  "hint": "ui-module__hjaCdq__hint",
  "input": "ui-module__hjaCdq__input",
  "label": "ui-module__hjaCdq__label",
  "list": "ui-module__hjaCdq__list",
  "page": "ui-module__hjaCdq__page",
  "panel": "ui-module__hjaCdq__panel",
  "row": "ui-module__hjaCdq__row",
  "rowMe": "ui-module__hjaCdq__rowMe",
  "rowName": "ui-module__hjaCdq__rowName",
  "tag": "ui-module__hjaCdq__tag",
  "title": "ui-module__hjaCdq__title",
});
}),
"[project]/app/join/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JoinPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/firebase.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$game$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/game-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/ui.module.css [app-client] (css module)");
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
function JoinPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [code, setCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleJoin = async ()=>{
        const roomCode = code.trim().toUpperCase();
        if (!roomCode) {
            setError("Introdu codul camerei.");
            return;
        }
        setLoading(true);
        setError(null);
        try {
            const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ensureUser"])();
            const uid = user.uid;
            const gameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "games", roomCode);
            const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(gameRef);
            if (!snap.exists()) {
                setError(`Camera ${roomCode} nu există.`);
                setLoading(false);
                return;
            }
            const data = snap.data();
            const players = data.players ?? {};
            // deja în cameră (refresh / revenire) – nu rescriem scorul
            if (players[uid]) {
                router.push(data.status === "running" ? `/game/${roomCode}` : `/lobby/${roomCode}`);
                return;
            }
            if (data.status !== "lobby") {
                setError("Jocul a început deja în această cameră.");
                setLoading(false);
                return;
            }
            if (Object.keys(players).length >= __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$game$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_PLAYERS"]) {
                setError(`Camera este plină (maxim ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$game$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_PLAYERS"]} jucători).`);
                setLoading(false);
                return;
            }
            const player = {
                name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$game$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanName"])(name, "Jucător"),
                color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$game$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextFreeColor"])(players),
                score: 0,
                joinedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
            };
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(gameRef, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldPath"]("players", uid), player);
            router.push(`/lobby/${roomCode}`);
        } catch (err) {
            console.error("Error joining game:", err);
            setError("Nu te-ai putut alătura. Verifică consola (F12) pentru detalii.");
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brand,
                    children: [
                        "Con",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "spritz"
                        }, void 0, false, {
                            fileName: "[project]/app/join/page.tsx",
                            lineNumber: 78,
                            columnNumber: 14
                        }, this),
                        "ädor"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/join/page.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                    children: "Intră într-o cameră"
                }, void 0, false, {
                    fileName: "[project]/app/join/page.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                    htmlFor: "code",
                    children: "Codul camerei"
                }, void 0, false, {
                    fileName: "[project]/app/join/page.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "code",
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].codeInput}`,
                    value: code,
                    maxLength: 5,
                    placeholder: "XXXXX",
                    autoCapitalize: "characters",
                    onChange: (e)=>setCode(e.target.value.toUpperCase()),
                    onKeyDown: (e)=>e.key === "Enter" && !loading && handleJoin()
                }, void 0, false, {
                    fileName: "[project]/app/join/page.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                    htmlFor: "name",
                    children: "Numele tău"
                }, void 0, false, {
                    fileName: "[project]/app/join/page.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "name",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                    value: name,
                    maxLength: 16,
                    placeholder: "Jucător",
                    onChange: (e)=>setName(e.target.value),
                    onKeyDown: (e)=>e.key === "Enter" && !loading && handleJoin()
                }, void 0, false, {
                    fileName: "[project]/app/join/page.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                    children: error
                }, void 0, false, {
                    fileName: "[project]/app/join/page.tsx",
                    lineNumber: 109,
                    columnNumber: 19
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btn,
                    onClick: handleJoin,
                    disabled: loading,
                    children: loading ? "Se conectează…" : "Intră"
                }, void 0, false, {
                    fileName: "[project]/app/join/page.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnGhost,
                    children: "← Înapoi"
                }, void 0, false, {
                    fileName: "[project]/app/join/page.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/join/page.tsx",
            lineNumber: 76,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/join/page.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_s(JoinPage, "MoVadzxyFFTJzpDb1GSR8jkYKZg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = JoinPage;
var _c;
__turbopack_context__.k.register(_c, "JoinPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_a72b9caf._.js.map