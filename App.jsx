
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ProposalForHer() {
    // Քո աղջկա անունը
    const recipientName = "Իվետա";
    const [showModal, setShowModal] = useState(false);
    const [accepted, setAccepted] = useState(null); // true/false/null

    // 📩 EmailJS ֆունկցիա
    function sendEmail(answer) {
        emailjs.send(
            "service_ui66prr",        // Service ID
            "template_ty2t74g",       // Քո Template ID (փոխիր)
            {
                name: recipientName,
                time: new Date().toLocaleString(),
                message: answer,
            },
            "Ro9UBjpXM1bsRn7oe"       // Քո Public Key
        ).then(
            (result) => {
                console.log("Նամակ ուղարկվեց ✔", result.text);
            },
            (error) => {
                console.log("Սխալ եղավ ❌", error.text);
            }
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white text-gray-800">

            <header className="sticky top-0 bg-white/80 backdrop-blur z-40 shadow-sm">
                <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-pink-400 flex items-center justify-center text-white font-bold text-lg">❤</div>
                        <div>
                            <div className="text-lg font-semibold">Դու և Ես</div>
                            <div className="text-xs text-gray-500">Մի փոքր կայք միայն քեզ համար</div>
                        </div>
                    </div>
                    <nav className="hidden md:flex gap-6 text-sm">
                        <a href="#story" className="hover:text-pink-600">Մեր պատմությունը</a>
                        <a href="#gallery" className="hover:text-pink-600">Պատկերներ</a>
                        <a href="#proposal" className="hover:text-pink-600">Իմ ասելիքը</a>
                    </nav>
                </div>
            </header>

            {/* HERO */}
            <main className="max-w-4xl mx-auto px-6 py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold">Խնդրում եմ լսիր ինձ</h1>
                <p className="mt-4 text-gray-600 text-lg">{recipientName}, ուզում էի անկեղծ ասել քո հանդեպ զգացողություններիս մասին։</p>

                <div className="mt-8">
                    <button
                        onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-6 py-3 bg-pink-600 text-white rounded-full mr-3"
                    >
                        Մեր պատմությունը
                    </button>
                    <button
                        onClick={() => setShowModal(true)}
                        className="px-6 py-3 border border-pink-600 text-pink-600 rounded-full"
                    >
                        Ի՞նչ առաջարկ ունեմ
                    </button>
                </div>
            </main>

            {/* STORY */}
            <section id="story" className="max-w-4xl mx-auto px-6 py-12">
                <h2 className="text-2xl font-bold text-center">Մեր փոքրիկ պատմությունը</h2>
                <ol className="mt-6 space-y-6">
                    <li className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="font-semibold">01․09․2025</div>
                        <div className="text-gray-500 text-sm mt-1">Հենց այդ օրը ես նկատեցի քո ժպիտը։</div>
                    </li>
                    <li className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="font-semibold">Առաջին խոսակցություն</div>
                        <div className="text-gray-500 text-sm mt-1">Հետո սկսեցինք խոսել ամեն բաների մասին։</div>
                    </li>
                    <li className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="font-semibold">Այս պահը</div>
                        <div className="text-gray-500 text-sm mt-1">Հիմա ուզում եմ հաջորդ քայլը անել։</div>
                    </li>
                </ol>
            </section>

            {/* GALLERY */}
            <section id="gallery" className="max-w-4xl mx-auto px-6 py-12">
                <h3 className="text-xl font-bold text-center">Պատկերներ քեզնից</h3>
                <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="h-40 bg-gray-100 rounded-lg"><img src="/img1.jpg" alt="" className="w-full h-full object-cover rounded-lg"/></div>
                    <div className="h-40 bg-gray-100 rounded-lg"><img src="/img2.jpg" alt="" className="w-full h-full object-cover rounded-lg"/></div>
                    <div className="h-40 bg-gray-100 rounded-lg"><img src="/img3.jpg" alt="" className="w-full h-full object-cover rounded-lg"/></div>
                </div>
            </section>

            {/* PROPOSAL */}
            <section id="proposal" className="max-w-4xl mx-auto px-6 py-12 text-center">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold">{recipientName}, մեկ հարց</h3>
                    <p className="mt-3 text-gray-600">
                        Կուզե՞ս սկսենք շփվել, ճանաչել իրար ավելի մոտ և տեսնենք, ուր կհասնի մեր պատմությունը։
                    </p>

                    <div className="mt-6 flex justify-center gap-4">
                        <button
                            onClick={() => { setAccepted(true); setShowModal(true); sendEmail("Այո, համաձայն եմ 💖"); }}
                            className="px-5 py-3 bg-pink-600 text-white rounded-full shadow-sm"
                        >
                            Այո, համաձայն եմ
                        </button>

                        <button
                            onClick={() => { setAccepted(false); setShowModal(true); sendEmail("Պետք է մտածեմ 🤔"); }}
                            className="px-5 py-3 border border-gray-300 rounded-full"
                        >
                            Պետք է մտածեմ
                        </button>
                    </div>


                </div>
            </section>


            {showModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-6 max-w-md w-full text-center">
                        {accepted === true ? (
                            <>
                                <h4 className="text-2xl font-bold text-pink-600">ՈՒրախ եմ որ համաձայնվեցիր 💖</h4>
                                <p className="mt-3 text-gray-600">Շնորհակալ եմ, թող սա լինի մեր փոքր, ազնիվ սկիզբը։</p>
                                <div className="mt-6 flex justify-center gap-3">
                                    <button onClick={() => setShowModal(false)} className="px-4 py-2 border rounded-md">Փակել</button>
                                </div>
                            </>
                        ) : accepted === false ? (
                            <>
                                <h4 className="text-xl font-semibold">Հասկացա</h4>
                                <p className="mt-3 text-gray-600">Ոչինչ, վերցրու ժամանակ։ Եթե ուզես խոսել՝ ես այստեղ եմ։</p>
                                <div className="mt-6">
                                    <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-100 rounded-md">OK</button>
                                </div>
                            </>
                        ) : (
                            <>
                                <h4 className="text-xl font-semibold">Դու իմաստն ես...</h4>
                                <button onClick={() => setShowModal(false)} className="mt-4 px-4 py-2 bg-gray-100 rounded-md">Փակել</button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
