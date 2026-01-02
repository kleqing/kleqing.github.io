---
published: true
name: acersense
description: a linux GUI for acer laptops using Linuwu drivers
thumbnail: acersense.png
images: [acersense.png]
github: https://github.com/kleqing/AcerSense
date: 2025-10-14
---

**AcerSense** is the ***reworked*** version of the original [DAMX](https://github.com/PXDiv/Div-Acer-Manager-Max) by PXDiv, which is a Linux GUI for Acer laptops using Linuwu Sense drivers — all wrapped in a modern Avalonia-based UI. This is a replicates of NitroSense and PredatorSense but for Linux!

### ✨ Features

- 🔋 **Performance / Thermal Profiles**
    - Eco, Silent, Balanced, Performance, Turbo — automatically adjusted based on AC/battery status
      (e.g., Turbo hidden when on battery or unsupported). **Only Nitro V (not 5) and Predator has this feature**

- 🌡 **Fan Control**
    - Manual and auto fan speed modes
    - Manual disabled automatically when in Quiet profile

- 💡 **LCD Override Setting**
    - Direct control over LCD power behavior

- 🎨 **Keyboard Backlight Control**
    - Customize the keyboard backlight timeout
    - Auto set keyboard backlight brightness slider based on the [acer-wmi](https://github.com/torvalds/linux/blob/master/drivers/platform/x86/acer-wmi.c) output

- 🔊 **Boot Animation and Sound Toggle**
    - Enable/disable Acer's startup animations and sounds

- 💻 **Live System Info Display**
    - Shows real-time performance profile, fan settings, calibration state, and more

- 🧠 **Smart Daemon (Low Resource Use)**
    - Auto-detects feature support per device
    - Communicates with GUI in real-time
    - Lightweight: consume less RAM
    - Can run **independently** of GUI
    - Recursive restart to fix software issues similar to those on Windows

- 🖥️ **Modern GUI**
    - Avalonia-based, clean and responsive
    - Realtime Monitoring with Dashboard and accurate Tempreature Readings
    - Dynamic UI hides unsupported features
    - Real-time feedback from daemon
