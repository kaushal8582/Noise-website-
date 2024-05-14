



function sequence_animation() {
  const canvas = document.querySelector('#page3>canvas');
  const context = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });


  function files(index) {
    var data = ` watch seq1/Untitled 261_1080p_000.png
    watch seq1/Untitled 261_1080p_001.png
    watch seq1/Untitled 261_1080p_002.png
    watch seq1/Untitled 261_1080p_003.png
    watch seq1/Untitled 261_1080p_004.png
    watch seq1/Untitled 261_1080p_005.png
    watch seq1/Untitled 261_1080p_006.png
    watch seq1/Untitled 261_1080p_007.png
    watch seq1/Untitled 261_1080p_008.png
    watch seq1/Untitled 261_1080p_009.png
    watch seq1/Untitled 261_1080p_010.png
    watch seq1/Untitled 261_1080p_011.png
    watch seq1/Untitled 261_1080p_012.png
    watch seq1/Untitled 261_1080p_013.png
    watch seq1/Untitled 261_1080p_014.png
    watch seq1/Untitled 261_1080p_015.png
    watch seq1/Untitled 261_1080p_016.png
    watch seq1/Untitled 261_1080p_017.png
    watch seq1/Untitled 261_1080p_018.png
    watch seq1/Untitled 261_1080p_019.png
    watch seq1/Untitled 261_1080p_020.png
    watch seq1/Untitled 261_1080p_021.png
    watch seq1/Untitled 261_1080p_022.png
    watch seq1/Untitled 261_1080p_023.png
    watch seq1/Untitled 261_1080p_024.png
    watch seq1/Untitled 261_1080p_025.png
    watch seq1/Untitled 261_1080p_026.png
    watch seq1/Untitled 261_1080p_027.png
    watch seq1/Untitled 261_1080p_028.png
    watch seq1/Untitled 261_1080p_029.png
    watch seq1/Untitled 261_1080p_030.png
    watch seq1/Untitled 261_1080p_031.png
    watch seq1/Untitled 261_1080p_032.png
    watch seq1/Untitled 261_1080p_033.png
    watch seq1/Untitled 261_1080p_034.png
    watch seq1/Untitled 261_1080p_035.png
    watch seq1/Untitled 261_1080p_036.png
    watch seq1/Untitled 261_1080p_037.png
    watch seq1/Untitled 261_1080p_038.png
    watch seq1/Untitled 261_1080p_039.png
    watch seq1/Untitled 261_1080p_040.png
    watch seq1/Untitled 261_1080p_041.png
    watch seq1/Untitled 261_1080p_042.png
    watch seq1/Untitled 261_1080p_043.png
    watch seq1/Untitled 261_1080p_044.png
    watch seq1/Untitled 261_1080p_045.png
    watch seq1/Untitled 261_1080p_046.png
    watch seq1/Untitled 261_1080p_047.png
    watch seq1/Untitled 261_1080p_048.png
    watch seq1/Untitled 261_1080p_049.png
    watch seq1/Untitled 261_1080p_050.png
    watch seq1/Untitled 261_1080p_051.png
    watch seq1/Untitled 261_1080p_052.png
    watch seq1/Untitled 261_1080p_053.png
    watch seq1/Untitled 261_1080p_054.png
    watch seq1/Untitled 261_1080p_055.png
    watch seq1/Untitled 261_1080p_056.png
    watch seq1/Untitled 261_1080p_057.png
    watch seq1/Untitled 261_1080p_058.png
    watch seq1/Untitled 261_1080p_059.png
    watch seq1/Untitled 261_1080p_060.png
    watch seq1/Untitled 261_1080p_061.png
    watch seq1/Untitled 261_1080p_062.png
    watch seq1/Untitled 261_1080p_063.png
    watch seq1/Untitled 261_1080p_064.png
    watch seq1/Untitled 261_1080p_065.png
    watch seq1/Untitled 261_1080p_066.png
    watch seq1/Untitled 261_1080p_067.png
    watch seq1/Untitled 261_1080p_068.png
    watch seq1/Untitled 261_1080p_069.png
    watch seq1/Untitled 261_1080p_070.png
    watch seq1/Untitled 261_1080p_071.png
    watch seq1/Untitled 261_1080p_072.png
    watch seq1/Untitled 261_1080p_073.png
    watch seq1/Untitled 261_1080p_074.png
    watch seq1/Untitled 261_1080p_075.png
    watch seq1/Untitled 261_1080p_076.png
    watch seq1/Untitled 261_1080p_077.png
    watch seq1/Untitled 261_1080p_078.png
    watch seq1/Untitled 261_1080p_079.png
    watch seq1/Untitled 261_1080p_080.png
    watch seq1/Untitled 261_1080p_081.png
    watch seq1/Untitled 261_1080p_082.png
    watch seq1/Untitled 261_1080p_083.png
    watch seq1/Untitled 261_1080p_084.png
    watch seq1/Untitled 261_1080p_085.png
    watch seq1/Untitled 261_1080p_086.png
    watch seq1/Untitled 261_1080p_087.png
    watch seq1/Untitled 261_1080p_088.png
    watch seq1/Untitled 261_1080p_089.png
    watch seq1/Untitled 261_1080p_090.png
    watch seq1/Untitled 261_1080p_091.png
    watch seq1/Untitled 261_1080p_092.png
    watch seq1/Untitled 261_1080p_093.png
    watch seq1/Untitled 261_1080p_094.png
    watch seq1/Untitled 261_1080p_095.png
    watch seq1/Untitled 261_1080p_096.png
    watch seq1/Untitled 261_1080p_097.png
    watch seq1/Untitled 261_1080p_098.png
    watch seq1/Untitled 261_1080p_099.png
    watch seq1/Untitled 261_1080p_100.png
    watch seq1/Untitled 261_1080p_101.png
    watch seq1/Untitled 261_1080p_102.png
    watch seq1/Untitled 261_1080p_103.png
    watch seq1/Untitled 261_1080p_104.png
    watch seq1/Untitled 261_1080p_105.png
    watch seq1/Untitled 261_1080p_106.png
    watch seq1/Untitled 261_1080p_107.png
    watch seq1/Untitled 261_1080p_108.png
    watch seq1/Untitled 261_1080p_109.png
    watch seq1/Untitled 261_1080p_110.png
    watch seq1/Untitled 261_1080p_111.png
    watch seq1/Untitled 261_1080p_112.png
    watch seq1/Untitled 261_1080p_113.png
    watch seq1/Untitled 261_1080p_114.png
    watch seq1/Untitled 261_1080p_115.png
    watch seq1/Untitled 261_1080p_116.png
    watch seq1/Untitled 261_1080p_117.png
    watch seq1/Untitled 261_1080p_118.png
    watch seq1/Untitled 261_1080p_119.png
    watch seq1/Untitled 261_1080p_120.png
    watch seq1/Untitled 261_1080p_121.png
    watch seq1/Untitled 261_1080p_122.png
    watch seq1/Untitled 261_1080p_123.png
    watch seq1/Untitled 261_1080p_124.png
    watch seq1/Untitled 261_1080p_125.png
    watch seq1/Untitled 261_1080p_126.png
    watch seq1/Untitled 261_1080p_127.png
    watch seq1/Untitled 261_1080p_128.png
    watch seq1/Untitled 261_1080p_129.png
    watch seq1/Untitled 261_1080p_130.png
    watch seq1/Untitled 261_1080p_131.png
    watch seq1/Untitled 261_1080p_132.png
    watch seq1/Untitled 261_1080p_133.png
    watch seq1/Untitled 261_1080p_134.png
    watch seq1/Untitled 261_1080p_135.png
    watch seq1/Untitled 261_1080p_136.png
    watch seq1/Untitled 261_1080p_137.png
    watch seq1/Untitled 261_1080p_138.png
    watch seq1/Untitled 261_1080p_139.png
    watch seq1/Untitled 261_1080p_140.png
    watch seq1/Untitled 261_1080p_141.png
    watch seq1/Untitled 261_1080p_142.png
    watch seq1/Untitled 261_1080p_143.png
    watch seq1/Untitled 261_1080p_144.png
    watch seq1/Untitled 261_1080p_145.png
    watch seq1/Untitled 261_1080p_146.png
    watch seq1/Untitled 261_1080p_147.png
    watch seq1/Untitled 261_1080p_148.png
    watch seq1/Untitled 261_1080p_149.png
    watch seq1/Untitled 261_1080p_150.png
    watch seq1/Untitled 261_1080p_151.png
    watch seq1/Untitled 261_1080p_152.png
    watch seq1/Untitled 261_1080p_153.png
    watch seq1/Untitled 261_1080p_154.png
    watch seq1/Untitled 261_1080p_155.png
    watch seq1/Untitled 261_1080p_156.png
    watch seq1/Untitled 261_1080p_157.png
    watch seq1/Untitled 261_1080p_158.png
    watch seq1/Untitled 261_1080p_159.png
    watch seq1/Untitled 261_1080p_160.png
    watch seq1/Untitled 261_1080p_161.png
    watch seq1/Untitled 261_1080p_162.png
    watch seq1/Untitled 261_1080p_163.png
    watch seq1/Untitled 261_1080p_164.png
    watch seq1/Untitled 261_1080p_165.png
    watch seq1/Untitled 261_1080p_166.png
    watch seq1/Untitled 261_1080p_167.png
    watch seq1/Untitled 261_1080p_168.png
    watch seq1/Untitled 261_1080p_169.png
    watch seq1/Untitled 261_1080p_170.png
    watch seq1/Untitled 261_1080p_171.png
    watch seq1/Untitled 261_1080p_172.png
    watch seq1/Untitled 261_1080p_173.png
    watch seq1/Untitled 261_1080p_174.png
    watch seq1/Untitled 261_1080p_175.png
    watch seq1/Untitled 261_1080p_176.png
    watch seq1/Untitled 261_1080p_177.png
    watch seq1/Untitled 261_1080p_178.png
    watch seq1/Untitled 261_1080p_179.png
    watch seq1/Untitled 261_1080p_180.png
    watch seq1/Untitled 261_1080p_181.png
    watch seq1/Untitled 261_1080p_182.png
    watch seq1/Untitled 261_1080p_183.png
    watch seq1/Untitled 261_1080p_184.png
    watch seq1/Untitled 261_1080p_185.png
    watch seq1/Untitled 261_1080p_186.png
    watch seq1/Untitled 261_1080p_187.png
    watch seq1/Untitled 261_1080p_188.png
    watch seq1/Untitled 261_1080p_189.png
    watch seq1/Untitled 261_1080p_190.png
    watch seq1/Untitled 261_1080p_191.png
    watch seq1/Untitled 261_1080p_192.png
    watch seq1/Untitled 261_1080p_193.png
    watch seq1/Untitled 261_1080p_194.png
    watch seq1/Untitled 261_1080p_195.png
    watch seq1/Untitled 261_1080p_196.png
    watch seq1/Untitled 261_1080p_197.png
    watch seq1/Untitled 261_1080p_198.png
    watch seq1/Untitled 261_1080p_199.png
    watch seq1/Untitled 261_1080p_200.png
    watch seq1/Untitled 261_1080p_201.png
    watch seq1/Untitled 261_1080p_202.png
    watch seq1/Untitled 261_1080p_203.png
    watch seq1/Untitled 261_1080p_204.png
    watch seq1/Untitled 261_1080p_205.png
    watch seq1/Untitled 261_1080p_206.png
    watch seq1/Untitled 261_1080p_207.png
    watch seq1/Untitled 261_1080p_208.png
    watch seq1/Untitled 261_1080p_209.png
    watch seq1/Untitled 261_1080p_210.png
    watch seq1/Untitled 261_1080p_211.png
    watch seq1/Untitled 261_1080p_212.png
    watch seq1/Untitled 261_1080p_213.png
    watch seq1/Untitled 261_1080p_214.png
    watch seq1/Untitled 261_1080p_215.png
    watch seq1/Untitled 261_1080p_216.png
    watch seq1/Untitled 261_1080p_217.png
    watch seq1/Untitled 261_1080p_218.png
    watch seq1/Untitled 261_1080p_219.png
    watch seq1/Untitled 261_1080p_220.png
    watch seq1/Untitled 261_1080p_221.png
    watch seq1/Untitled 261_1080p_222.png
    watch seq1/Untitled 261_1080p_223.png
    watch seq1/Untitled 261_1080p_224.png
    watch seq1/Untitled 261_1080p_225.png
    watch seq1/Untitled 261_1080p_226.png
    watch seq1/Untitled 261_1080p_227.png
    watch seq1/Untitled 261_1080p_228.png
    watch seq1/Untitled 261_1080p_229.png
    watch seq1/Untitled 261_1080p_230.png
    watch seq1/Untitled 261_1080p_231.png
    watch seq1/Untitled 261_1080p_232.png
    watch seq1/Untitled 261_1080p_233.png
    watch seq1/Untitled 261_1080p_234.png
    watch seq1/Untitled 261_1080p_235.png
    watch seq1/Untitled 261_1080p_236.png
    watch seq1/Untitled 261_1080p_237.png
    watch seq1/Untitled 261_1080p_238.png
    watch seq1/Untitled 261_1080p_239.png
    watch seq1/Untitled 261_1080p_240.png
    watch seq1/Untitled 261_1080p_241.png
    watch seq1/Untitled 261_1080p_242.png
    watch sq2/Untitled 261_1080p_1_000.png
    watch sq2/Untitled 261_1080p_1_001.png
    watch sq2/Untitled 261_1080p_1_002.png
    watch sq2/Untitled 261_1080p_1_003.png
    watch sq2/Untitled 261_1080p_1_004.png
    watch sq2/Untitled 261_1080p_1_005.png
    watch sq2/Untitled 261_1080p_1_006.png
    watch sq2/Untitled 261_1080p_1_007.png
    watch sq2/Untitled 261_1080p_1_008.png
    watch sq2/Untitled 261_1080p_1_009.png
    watch sq2/Untitled 261_1080p_1_010.png
    watch sq2/Untitled 261_1080p_1_011.png
    watch sq2/Untitled 261_1080p_1_012.png
    watch sq2/Untitled 261_1080p_1_013.png
    watch sq2/Untitled 261_1080p_1_014.png
    watch sq2/Untitled 261_1080p_1_015.png
    watch sq2/Untitled 261_1080p_1_016.png
    watch sq2/Untitled 261_1080p_1_017.png
    watch sq2/Untitled 261_1080p_1_018.png
    watch sq2/Untitled 261_1080p_1_019.png
    watch sq2/Untitled 261_1080p_1_020.png
    watch sq2/Untitled 261_1080p_1_021.png
    watch sq2/Untitled 261_1080p_1_022.png
    watch sq2/Untitled 261_1080p_1_023.png
    watch sq2/Untitled 261_1080p_1_024.png
    watch sq2/Untitled 261_1080p_1_025.png
    watch sq2/Untitled 261_1080p_1_026.png
    watch sq2/Untitled 261_1080p_1_027.png
    watch sq2/Untitled 261_1080p_1_028.png
    watch sq2/Untitled 261_1080p_1_029.png
    watch sq2/Untitled 261_1080p_1_030.png
    watch sq2/Untitled 261_1080p_1_031.png
    watch sq2/Untitled 261_1080p_1_032.png
    watch sq2/Untitled 261_1080p_1_033.png
    watch sq2/Untitled 261_1080p_1_034.png
    watch sq2/Untitled 261_1080p_1_035.png
    watch sq2/Untitled 261_1080p_1_036.png
    watch sq2/Untitled 261_1080p_1_037.png
    watch sq2/Untitled 261_1080p_1_038.png
    watch sq2/Untitled 261_1080p_1_039.png
    watch sq2/Untitled 261_1080p_1_040.png
    watch sq2/Untitled 261_1080p_1_041.png
    watch sq2/Untitled 261_1080p_1_042.png
    watch sq2/Untitled 261_1080p_1_043.png
    watch sq2/Untitled 261_1080p_1_044.png
    watch sq2/Untitled 261_1080p_1_045.png
    watch sq2/Untitled 261_1080p_1_046.png
    watch sq2/Untitled 261_1080p_1_047.png
    watch sq2/Untitled 261_1080p_1_048.png
    watch sq2/Untitled 261_1080p_1_049.png
    watch sq2/Untitled 261_1080p_1_050.png
    watch sq2/Untitled 261_1080p_1_051.png
    watch sq2/Untitled 261_1080p_1_052.png
    watch sq2/Untitled 261_1080p_1_053.png
    watch sq2/Untitled 261_1080p_1_054.png
    watch sq2/Untitled 261_1080p_1_055.png
    watch sq2/Untitled 261_1080p_1_056.png
    watch sq2/Untitled 261_1080p_1_057.png
    watch sq2/Untitled 261_1080p_1_058.png
    watch sq2/Untitled 261_1080p_1_059.png
    watch sq2/Untitled 261_1080p_1_060.png
    watch sq2/Untitled 261_1080p_1_061.png
    watch sq2/Untitled 261_1080p_1_062.png
    watch sq2/Untitled 261_1080p_1_063.png
    watch sq2/Untitled 261_1080p_1_064.png
    watch sq2/Untitled 261_1080p_1_065.png
    watch sq2/Untitled 261_1080p_1_066.png
    watch sq2/Untitled 261_1080p_1_067.png
    watch sq2/Untitled 261_1080p_1_068.png
    watch sq2/Untitled 261_1080p_1_069.png
    watch sq2/Untitled 261_1080p_1_070.png
    watch sq2/Untitled 261_1080p_1_071.png
    watch sq2/Untitled 261_1080p_1_072.png
    watch sq2/Untitled 261_1080p_1_073.png
    watch sq2/Untitled 261_1080p_1_074.png
    watch sq2/Untitled 261_1080p_1_075.png
    watch sq2/Untitled 261_1080p_1_076.png
    watch sq2/Untitled 261_1080p_1_077.png
    watch sq2/Untitled 261_1080p_1_078.png
    watch sq2/Untitled 261_1080p_1_079.png
    watch sq2/Untitled 261_1080p_1_080.png
    watch sq2/Untitled 261_1080p_1_081.png
    watch sq2/Untitled 261_1080p_1_082.png
    watch sq2/Untitled 261_1080p_1_083.png
    watch sq2/Untitled 261_1080p_1_084.png
    watch sq2/Untitled 261_1080p_1_085.png
    watch sq2/Untitled 261_1080p_1_086.png
    watch sq2/Untitled 261_1080p_1_087.png
    watch sq2/Untitled 261_1080p_1_088.png
    watch sq2/Untitled 261_1080p_1_089.png
    watch sq2/Untitled 261_1080p_1_090.png
    watch sq2/Untitled 261_1080p_1_091.png
    watch sq2/Untitled 261_1080p_1_092.png
    watch sq2/Untitled 261_1080p_1_093.png
    watch sq2/Untitled 261_1080p_1_094.png
    watch sq2/Untitled 261_1080p_1_095.png
    watch sq2/Untitled 261_1080p_1_096.png
    watch sq2/Untitled 261_1080p_1_097.png
    watch sq2/Untitled 261_1080p_1_098.png
    watch sq2/Untitled 261_1080p_1_099.png
    watch sq2/Untitled 261_1080p_1_100.png
    watch sq2/Untitled 261_1080p_1_101.png
    watch sq2/Untitled 261_1080p_1_102.png
    watch sq2/Untitled 261_1080p_1_103.png
    watch sq2/Untitled 261_1080p_1_104.png
    watch sq2/Untitled 261_1080p_1_105.png
    watch sq2/Untitled 261_1080p_1_106.png
    watch sq2/Untitled 261_1080p_1_107.png
    watch sq2/Untitled 261_1080p_1_108.png
    watch sq2/Untitled 261_1080p_1_109.png
    watch sq2/Untitled 261_1080p_1_110.png
    watch sq2/Untitled 261_1080p_1_111.png
    watch sq2/Untitled 261_1080p_1_112.png
    watch sq2/Untitled 261_1080p_1_113.png
    watch sq2/Untitled 261_1080p_1_114.png
    watch sq2/Untitled 261_1080p_1_115.png
    watch sq2/Untitled 261_1080p_1_116.png
    watch sq2/Untitled 261_1080p_1_117.png
    watch sq2/Untitled 261_1080p_1_118.png
    watch sq2/Untitled 261_1080p_1_119.png
    watch sq2/Untitled 261_1080p_1_120.png
    watch sq2/Untitled 261_1080p_1_121.png
   
   
        `;
    return data.split('\n')[index];
  }


  const frameCount = 363;

  const images = [];
  const imageSeq = {
    frame: 0,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: 'frame',
    ease: 'none',
    scrollTrigger: {
      scrub: 0.1,
      pin: true,
      trigger: '#page3',
      start: "top 0%",
      end: "3000% top",
      // markers: true
    },
    onUpdate: render,
  });

  images[0].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }

  gsap.to("#page3 canvas", {
    scrollTrigger: {
      trigger: "#page3",
      start: "bottom 80%",
      scrub: true,
      //  markers:true,
    },
    // scale: 0.6,
  })

}

function locoMotiveScroll() {
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
  })();
}

locoMotiveScroll()

sequence_animation()