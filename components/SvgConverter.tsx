// 'use client'
// components/SvgToImageExport.js
import { useEffect } from 'react';

function triggerDownload(imgURI: any) {
    const a = document.createElement('a');
    a.download = 'MY_COOL_IMAGE.png';
    a.target = '_blank';
    a.href = imgURI;
    a.dispatchEvent(new MouseEvent('click', {
        view: window,
        bubbles: false,
        cancelable: true
    }));
}

const SvgToImageExport = () => {
    useEffect(() => {
        const btn = document.querySelector('.export-button');
        btn!.addEventListener('click', function () {
            const svgNode = document.querySelector('svg');
            const svgString = (new XMLSerializer()).serializeToString(svgNode!);
            const svgBlob = new Blob([svgString], {
                type: 'image/svg+xml;charset=utf-8'
            });

            const DOMURL = window.URL || window.webkitURL || window;
            const url = DOMURL.createObjectURL(svgBlob);

            const image = new Image();
            image.width = svgNode!.width.baseVal.value;
            image.height = svgNode!.height.baseVal.value;
            image.src = url;
            image.onload = function () {
                const canvas = document.createElement('canvas');
                canvas.width = image.width;
                canvas.height = image.height;

                const ctx = canvas.getContext('2d');
                ctx!.drawImage(image, 0, 0);
                DOMURL.revokeObjectURL(url);

                const imgURI = canvas
                    .toDataURL('image/png')
                    .replace('image/png', 'image/octet-stream');
                triggerDownload(imgURI);
            };
        });
    }, []);

    return (
        <div className='w-full h-full bg-green-300'>
            <svg className="svg-standalone-icon" width="100%" viewBox="226.45591678887365 115 97.0881664222527 107.62424921215418">
                <g data-paper-data="{&quot;initialText&quot;:&quot;Z&quot;,&quot;fillRule&quot;:&quot;nonzero&quot;,&quot;selectedEffects&quot;:{&quot;container&quot;:&quot;hexagon_simple_outline2_rounded_upright&quot;,&quot;transformation&quot;:&quot;&quot;,&quot;pattern&quot;:&quot;&quot;},&quot;relativeBoundsIconToContainer&quot;:{&quot;top&quot;:0.0020413362414282393,&quot;left&quot;:-0.03587260699026294},&quot;widthRatioIconToContainer&quot;:0.7101839022945703,&quot;heightRatioIconToContainer&quot;:0.61298410743237,&quot;bounds&quot;:{&quot;x&quot;:226.45591678887365,&quot;y&quot;:115,&quot;width&quot;:97.0881664222527,&quot;height&quot;:107.62424921215418},&quot;isIcon&quot;:&quot;true&quot;,&quot;iconType&quot;:&quot;initial&quot;,&quot;iconStyle&quot;:&quot;standalone&quot;,&quot;rawInitialId&quot;:319,&quot;suitableAsStandaloneIcon&quot;:true}" fillRule="nonzero">
                    <path d="M305.55456,196.7248c0,1.65141 -2.28657,5.293 -6.60566,5.293c-15.92134,0 -29.6408,-13.12664 -41.32774,-20.4945c-4.31909,2.87939 -8.93458,4.65784 -13.93118,4.65784h-0.08469c-4.14971,0 -6.56332,-2.24423 -6.56332,-5.25066c0,-3.38752 4.36143,-5.71644 7.83364,-5.71644c4.65784,0 8.76521,1.01626 12.57617,2.62533c4.36143,-4.31909 8.55349,-10.2049 12.83023,-16.17541c-5.16597,1.14329 -7.83364,2.75236 -9.10396,2.92173c-0.76219,0.12703 -1.43969,-0.97391 -1.56673,-2.07486c-0.21172,-1.27032 8.0877,-3.04877 12.74555,-3.72627c4.19206,-5.84347 8.4688,-11.51757 12.95727,-15.75197c-7.11379,-2.58298 -15.24384,-5.58941 -22.39997,-5.58941c-6.01285,0 -10.50131,5.12362 -10.50131,9.95084c0,4.82722 2.66767,4.86956 2.66767,5.58941c0,0.33875 -0.59282,0.80453 -1.56673,0.80453c-0.93157,0 -4.27675,-1.18563 -4.27675,-5.75879c0,-4.53081 5.25066,-11.98335 13.7618,-11.98335c7.96067,0 17.53042,2.62533 25.23702,4.53081c3.59924,-2.79471 7.4102,-4.53081 11.47523,-4.53081c8.59583,0 8.34177,10.75538 -0.59282,10.75538c-2.58298,0 -5.9705,-0.97391 -9.82381,-2.32892c-3.21814,3.72627 -6.69035,8.68052 -10.37428,13.80414c6.18222,-0.16937 12.66086,0.3811 12.83023,1.48204c0.08469,0.59282 -0.46578,0.80453 -0.80453,0.84688c-0.29641,0.04234 -4.95425,-0.93157 -13.71945,-0.04234c-4.99659,6.85973 -10.50131,13.84649 -16.64119,18.75839c12.44914,6.43629 22.56935,18.12323 40.01508,18.12323c2.62533,0 4.95425,-2.07486 4.95425,-0.71985zM292.13151,141.46588c2.66767,0.59282 4.95425,0.97391 6.64801,0.97391c5.20831,0 4.95425,-4.74253 0.59282,-4.74253c-2.32892,0 -4.70018,1.39735 -7.24082,3.76861zM255.12286,180.04126c-3.64158,-2.07486 -7.07145,-3.42987 -10.28959,-3.42987c-2.1172,0 -4.99659,1.18563 -4.99659,4.31909c0,2.15955 1.43969,3.93799 4.40377,3.93799c3.81096,0 7.4102,-1.86314 10.88241,-4.82722zM315.7781,136.30146c5.17732,2.98913 7.76599,7.47279 7.76599,13.45099v38.11928c0,5.97819 -2.58866,10.46193 -7.76599,13.45121l-33.01238,19.05964c-5.17714,2.98891 -10.35434,2.98891 -15.53159,0l-33.01227,-19.05964c-5.17729,-2.98928 -7.76593,-7.47301 -7.76593,-13.45121v-38.11928c0,-5.97819 2.58864,-10.46185 7.76593,-13.45099l33.01227,-19.05962c5.17725,-2.98911 10.35445,-2.98911 15.53159,0zM229.22338,149.75244v38.11928c0,4.91303 2.1274,8.59771 6.3822,11.05405l33.01227,19.05964c4.2548,2.4567 8.50959,2.4567 12.76435,0l33.01217,-19.05964c4.25484,-2.45634 6.38226,-6.14102 6.38226,-11.05405v-38.11928c0,-4.91303 -2.12742,-8.59778 -6.38226,-11.05426l-33.01217,-19.05966c-4.2548,-2.45651 -8.50959,-2.45651 -12.76435,0l-33.01227,19.05966c-4.2548,2.45648 -6.3822,6.14123 -6.3822,11.05426z" data-paper-data="{&quot;isPathIcon&quot;:true}" style={{ fill: "rgb(255, 255, 255)" }}>
                    </path>
                </g>
            </svg>
            <button className='export-button w-[300px] h-[300px] text-black'>Export as Image</button>
        </div>
    );
};

export default SvgToImageExport;