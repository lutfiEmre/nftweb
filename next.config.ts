import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Diğer yapılandırma ayarları (örneğin, reactStrictMode gibi)
    reactStrictMode: true,

    // Başlıkları ayarlamak için headers fonksiyonu
    async headers() {
        return [
            {
                source: "/(.*)", // Tüm yollar için bu başlıklar geçerli olacak
                headers: [
                    {
                        key: "Cross-Origin-Opener-Policy",
                        value: "same-origin",
                    },
                    {
                        key: "Cross-Origin-Embedder-Policy",
                        value: "require-corp",
                    },
                ],
            },
        ];
    },
    output: 'export',
};

export default nextConfig;
