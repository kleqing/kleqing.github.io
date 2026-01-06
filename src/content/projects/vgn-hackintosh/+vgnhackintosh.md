---
published: true
name: vaio vgn hackintosh
description: a legacy hackintosh on sony vaio vgn-ns240e
thumbnail: https://res.cloudinary.com/dwgjleqne/image/upload/v1767710584/vgnhackintosh_kisszm.png
images: [https://res.cloudinary.com/dwgjleqne/image/upload/v1767710584/vgnhackintosh_kisszm.png]
github: https://github.com/kleqing/Vaio-VGN-NS240E-Hackintosh
date: 2021-08-30
---

A legacy laptop that I managed to hackintosh, the Sony Vaio VGN-NS240E. It features with an Intel Core 2 Duo T9400 processor, 4GB of RAM DDR2 and an Intel GMA 4500MHD integrated graphics card.

The laptop itself is quite old, released back in 2008, but it still works fine for basic tasks.

I tried macOS Yosemite (10.10) on it, it run well but the graphics acceleration is not working due to the new feature added in Yosemite (transparency, flat design, etc.) that require more graphics power, the GMA 4500MHD can't handle it well.

Which is the reason I installed macOS 10.9 which can make the graphics acceleration even won't work but at least it is more stable on this hardware although it only show 3MB of VRAM in "About This Mac".

There was a kext supporting GMA 4500MHD graphics acceleration but it only works up to macOS 10.8. I already tried to install macOS 10.8 but the installer crashed during boot, so I gave up on that. Some feature like airdrop work when i replaced the wifi card to ar9580. 

Sleep on this hackintosh is not working properly but it still a good experience to run macOS on this old laptop.