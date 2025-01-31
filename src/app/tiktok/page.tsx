"use client"

export default function Tiktok() {
    const username = "@nadeeshrox8756"; // Replace with actual TikTok username
    const tikTokDeepLink = `tiktok://user?screen_name=@nadeeshrox8756`;
    const tikTokWebLink = `https://www.tiktok.com/@nadeeshrox8756`;

    const openTikTok = () => {
        const start = Date.now();
        const newTab = window.open(tikTokDeepLink, "_blank"); // Try to open the app
        
        setTimeout(() => {
            const elapsed = Date.now() - start;
            
            // If the app didn't open, the user is still on the page
            if (elapsed < 1500) {
                if (newTab) {
                    newTab.location.href = tikTokWebLink; // Redirect to the web version
                } else {
                    window.location.href = tikTokWebLink;
                }
            }
        }, 1500);
    };

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] dark:bg-[#000] bg-[#fff]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <h1 className="text-4xl font-bold text-black dark:text-white">My App</h1>
                <button onClick={openTikTok} className="p-2 bg-[#ff0000] text-[#fff] hover:bg-[#fff000]" >Open My page</button>
            </main>
        </div>
    );
}