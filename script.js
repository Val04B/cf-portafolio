/* ==========================================================================
   CONCEPTO & FORMA - ESTUDIO DE ARQUITECTURA Y DISEÑO
   Lógica e Interactividad JavaScript v5.2 (Cloud Edition)
   ========================================================================== */

(function () {
    'use strict';

    // BASE DE DATOS COMPLETA DE RECURSOS POR PROYECTO (IMÁGENES Y VIDEOS EN DRIVE)
    const projectsGallery = {
        '01_oficina_204': [
            'https://lh3.googleusercontent.com/d/1DSOATA58Xc9GhjRIl-HVzAk2Uv6dCNl5',
            'https://lh3.googleusercontent.com/d/19o9QuZ6YAGFZzsQMPO-E0Ab6oASr8JHj',
            'https://lh3.googleusercontent.com/d/1fk-riL10A-Nc-D9Y2rWvm8Az5CnINRMc'
        ],
        '02_oficina_801': [
            'https://lh3.googleusercontent.com/d/1sI7v61SeRLfeA_gLRrWIBWt0WG9bfSS_',
            'https://lh3.googleusercontent.com/d/1Q6bCEeEXAZVP43iFd1hVU8IzbE3UjLsO',
            'https://lh3.googleusercontent.com/d/12hrY4E4mwIbDZJ6ckq6CUjWFw9NARwzf',
            'https://lh3.googleusercontent.com/d/1WpMWHSkxT0fcra2YYFUi88To10psK7BB',
            'https://lh3.googleusercontent.com/d/16IoQyNVeHiDYu9yzH_5ORdkqXB8k5tjx',
            'https://lh3.googleusercontent.com/d/1NeuUM17GG9iFy8i1cA4TZ_fK1TPaWUed',
            'https://lh3.googleusercontent.com/d/1OBpEFxXFb7ReeNJsNvyBZu21gV4Crs_n',
            'https://lh3.googleusercontent.com/d/1U8hSzXLKZ8-UBC7eJ3Q7yYbuRSkLLQVo',
            'https://lh3.googleusercontent.com/d/1miSgfSzAg5kg-h13eKPK4d_LJTbhK8vM',
            'https://lh3.googleusercontent.com/d/1QttH0vYZybnC4Y9cY5vb8gnmvPwGBiq5',
            'https://lh3.googleusercontent.com/d/1ibRI9GzF1wMBa6AfTiwe-KiBoiY1kOZ9',
            'https://lh3.googleusercontent.com/d/1HwjYeqg0v_6iMz1RU1SpELYHLZmt3oo0',
            'https://lh3.googleusercontent.com/d/1gTkweTsrJA8vW3rSSQd9oITryr5SC4Mt',
            'https://lh3.googleusercontent.com/d/1w1X4DIT_4nUeksKnd_PxGk2TVj4u_1v-'
        ],
        '03_marca_cafe_amor_de_mujer': [
            'https://lh3.googleusercontent.com/d/1_HPibMU-ppSq5W6QhKKGEpsBWoqN6dVO'
        ],
        '04_marca_mercamio_chia': [
            'https://lh3.googleusercontent.com/d/1HXKQM5P9YM_kgK29Vt9UlAx2OLtOJ4pu#.mp4',
            'https://lh3.googleusercontent.com/d/10siaRBQtgSG3L8HhRcocF7jqk9-5C0Mr'
        ],
        '05_proyecto_80': [
            'https://lh3.googleusercontent.com/d/1OIalIJNr8vVpgJkVI3gkk5o-KUmq-TQ4',
            'https://lh3.googleusercontent.com/d/1MkhsKFJOgoxjt0q8ptfBwdc0lSRN1mZq#.mp4',
            'https://lh3.googleusercontent.com/d/19fU0vzPtUOP4-GpaiX3TDRRgDgLsQWxl#.mp4',
            'https://lh3.googleusercontent.com/d/12SUvLR5u5Vod-k5c44cI_LiNx3iBOGgH',
            'https://lh3.googleusercontent.com/d/1is-qokRaVSdLFH_1cLfqU5TBRO8lPV8y',
            'https://lh3.googleusercontent.com/d/1En1k5luld8pnapmrxpqGXVJ32dsMsdrP',
            'https://lh3.googleusercontent.com/d/1ihav2ajnuqucXRlHkWXZNtE0lSjmh9mz',
            'https://lh3.googleusercontent.com/d/1iLBvtnNmhpYD7NR5M3djJoUQZi9AXY-n',
            'https://lh3.googleusercontent.com/d/1K3-eJYJyAvP9UjENIQcwGIxTEYZPEsAd#.mp4',
            'https://lh3.googleusercontent.com/d/1DPUQpiBIJaymaKxKmvo0On--fDqSFeC4#.mp4'
        ],
        '06_casa_campestre': [
            'https://lh3.googleusercontent.com/d/1zVesUqiiFuq1dPIKCvy1kiCY9BsH7nls',
            'https://lh3.googleusercontent.com/d/1s8H31kM-cwQCigJoIUpj5x8fV8t4VC-c',
            'https://lh3.googleusercontent.com/d/1EP8wen6405t2hqnVXk0iknVYYx5bfJMn',
            'https://lh3.googleusercontent.com/d/1T2K5RPXJQw4Dd6cVLSdiEDIrN-LWgQd1'
        ],
        '07_rigarchem': [
            'https://lh3.googleusercontent.com/d/1RDPzehwHkF83LXHNGqxNuxHWCsr_O4sf',
            'https://lh3.googleusercontent.com/d/1jQvkeKr6X-Fmg_3DmYG9W2ozaykglDwl',
            'https://lh3.googleusercontent.com/d/1GAq3cbQzRD3uBPJ7VFLs9VmT6Zfp8r5g',
            'https://lh3.googleusercontent.com/d/1-oghYXrOy7RwLp5ZTf4zxHUdzt1v-MaN'
        ],
        '08_casas_residenciales': [
            'https://lh3.googleusercontent.com/d/1FnSMSjfVfXN0wVXePO81u2TZso1Mj2sE',
            'https://lh3.googleusercontent.com/d/17RXPDciJvL4JBQ9MF1T0UEVhgTTm7bCJ',
            'https://lh3.googleusercontent.com/d/1QDyIt4J-lzexPRgzmFU8-8zSEw8bvXIl',
            'https://lh3.googleusercontent.com/d/1TjOFzMPvRUU75XcpGZs6PNfv9Vv8tSzV',
            'https://lh3.googleusercontent.com/d/14YSQa9t6ccQVF08NS1XdujcMX3xxUh4K',
            'https://lh3.googleusercontent.com/d/13WNBH70avhDvkGhZQpeyW_hbYGkijV6X'
        ],
        '09_cocinas_integrales': [
            'https://lh3.googleusercontent.com/d/1LuYK8mkiJr139be-xNqQylwDC1QTa7pD',
            'https://lh3.googleusercontent.com/d/1VyfJdZTI_FEjSs9gpWpbgsufalS72jSa',
            'https://lh3.googleusercontent.com/d/1efvj7z0kTf22Qw-2Knk-Is1phzwfwCDt',
            'https://lh3.googleusercontent.com/d/1yPvr5vJYr58HnlnyjYsEk5aLuWvRZW1X',
            'https://lh3.googleusercontent.com/d/1DCp6F34RiNBorFUWWCr4gBKtGOgbfSDc'
        ],
        '10_iluminacion_arquitectonica': [
            'https://lh3.googleusercontent.com/d/1xBPoFMoL6ioCS7NvhChTdxQGfHkMA_Vi#.mp4',
            'https://lh3.googleusercontent.com/d/1hEjgwC6_CFRk6cClS-FQYt7rGBGImk14',
            'https://lh3.googleusercontent.com/d/1ML3sNi241YCZizc-9Nt5ekXp3So_fep0',
            'https://lh3.googleusercontent.com/d/1Lu_1SYw8a3DOuy8Jolm6sA4IMeYUV7qL'
        ],
        '11_mobiliario': [
            'https://lh3.googleusercontent.com/d/1O8IKtmf2Hdh31CyePKl_eV_oLj6pFD3K',
            'https://lh3.googleusercontent.com/d/1n2DeokAQNQgey6uEachq_49T5XIhVMz-',
            'https://lh3.googleusercontent.com/d/16uWjvImtSxUL23icCxsUU2VmTQyu3dHx',
            'https://lh3.googleusercontent.com/d/1F86oPmDZPzhpiuqPxNswllDTeoPa81XI',
            'https://lh3.googleusercontent.com/d/1p8swyYRv4oqS2bdVkjEaMlXrYzH4ZDiI',
            'https://lh3.googleusercontent.com/d/1r0sf9MVEiiCl2_uhSxI-KuMuj0mCC1SR'
        ]
    };

    // ALIAS DE SEGURIDAD PARA CLAVES ALTERNATIVAS (SLUGS HTML)
    projectsGallery['oficina-204'] = projectsGallery['01_oficina_204'];
    projectsGallery['oficina-801'] = projectsGallery['02_oficina_801'];
    projectsGallery['cafe-amor'] = projectsGallery['03_marca_cafe_amor_de_mujer'];
    projectsGallery['mercamio-chia'] = projectsGallery['04_marca_mercamio_chia'];
    projectsGallery['mercamio-80'] = projectsGallery['05_proyecto_80'];
    projectsGallery['05_mercamio_80'] = projectsGallery['05_proyecto_80'];
    projectsGallery['casa-campestre'] = projectsGallery['06_casa_campestre'];
    projectsGallery['rigarchem'] = projectsGallery['07_rigarchem'];
    projectsGallery['casas-residenciales'] = projectsGallery['08_casas_residenciales'];
    projectsGallery['cocinas-integrales'] = projectsGallery['09_cocinas_integrales'];
    projectsGallery['iluminacion'] = projectsGallery['10_iluminacion_arquitectonica'];
    projectsGallery['10_Diseño de iluminación arquitectónica'] = projectsGallery['10_iluminacion_arquitectonica'];
    projectsGallery['mobiliario'] = projectsGallery['11_mobiliario'];
    projectsGallery['11_Mobiliario'] = projectsGallery['11_mobiliario'];

    let currentMediaList = [];
    let currentIndex = 0;

    function initApp() {
        initHeaderScroll();
        initNavMenu();
        initCustomCursor();
        initProjectFilters();
        initLightbox();
        initContactForm();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initApp);
    } else {
        initApp();
    }

    function initHeaderScroll() {
        const header = document.getElementById('site-header');
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section[id]');

        function onScroll() {
            if (window.scrollY > 50) {
                header?.classList.add('scrolled');
            } else {
                header?.classList.remove('scrolled');
            }

            let currentSectionId = '';
            const scrollPosition = window.scrollY + 200;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSectionId = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    function initNavMenu() {
        const menuToggle = document.getElementById('menu-toggle');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        if (menuToggle && navMenu) {
            menuToggle.addEventListener('click', function () {
                menuToggle.classList.toggle('active');
                navMenu.classList.toggle('active');
                document.body.classList.toggle('no-scroll', navMenu.classList.contains('active'));
            });

            navLinks.forEach(link => {
                link.addEventListener('click', function () {
                    menuToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.classList.remove('no-scroll');
                });
            });
        }
    }

    function initCustomCursor() {
        const cursor = document.querySelector('.custom-cursor');
        const dot = document.querySelector('.custom-cursor-dot');

        if (!cursor || !dot) return;

        let posX = 0, posY = 0;
        let mouseX = 0, mouseY = 0;

        document.addEventListener('mousemove', function (e) {
            mouseX = e.clientX;
            mouseY = e.clientY;

            dot.style.left = `${mouseX}px`;
            dot.style.top = `${mouseY}px`;
        });

        function animateCursor() {
            posX += (mouseX - posX) * 0.2;
            posY += (mouseY - posY) * 0.2;

            cursor.style.left = `${posX}px`;
            cursor.style.top = `${posY}px`;

            requestAnimationFrame(animateCursor);
        }

        animateCursor();

        const interactiveElements = document.querySelectorAll('a, button, .project-card, .bento-card, input, select, textarea');

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-hover');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-hover');
            });
        });
    }

    function initProjectFilters() {
        const filterTabs = document.querySelectorAll('.filter-tab');
        const projectCards = document.querySelectorAll('.project-card');

        if (!filterTabs.length || !projectCards.length) return;

        filterTabs.forEach(tab => {
            tab.addEventListener('click', function () {
                filterTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');

                const filterValue = this.getAttribute('data-filter');

                projectCards.forEach(card => {
                    const category = card.getAttribute('data-category');

                    if (filterValue === 'all' || filterValue === category) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    function initLightbox() {
        const modal = document.getElementById('lightbox-modal');
        const backdrop = document.getElementById('lightbox-backdrop');
        const closeBtn = document.getElementById('lightbox-close');
        const prevBtn = document.getElementById('lightbox-prev');
        const nextBtn = document.getElementById('lightbox-next');

        const titleEl = document.getElementById('lightbox-project-title');
        const catEl = document.getElementById('lightbox-project-cat');
        const descEl = document.getElementById('lightbox-project-desc');

        const mainImg = document.getElementById('lightbox-img');
        const videoContainer = document.getElementById('lightbox-video-container');
        const mainVideo = document.getElementById('lightbox-video');

        const thumbnailsContainer = document.getElementById('lightbox-thumbnails');
        const projectCards = document.querySelectorAll('.project-card');

        if (!modal || !projectCards.length) return;

        function isVideoFile(src) {
            return src.includes('.mp4') || src.includes('.mov');
        }

        function openModal(card) {
            onst projectKey = card.getAttribute('data-project');
            const title = card.getAttribute('data-title') || card.querySelector('.project-title')?.innerText;
            const category = card.getAttribute('data-subtitle') || card.querySelector('.project-cat')?.innerText;
            const desc = card.getAttribute('data-desc') || '';

            if (titleEl) titleEl.innerText = title;
            if (catEl) catEl.innerText = category;
            if (descEl) descEl.innerText = desc;

            let mediaFiles = projectsGallery[projectKey] ||
                             (projectKey ? projectsGallery[projectKey.replace(/-/g, '_')] : null) ||
                             (projectKey ? projectsGallery[projectKey.replace(/_/g, '-')] : null);

            if (!mediaFiles || !mediaFiles.length) {
                const cardImg = card.querySelector('img')?.getAttribute('src');
                mediaFiles = cardImg ? [cardImg] : [];
            }

            currentMediaList = mediaFiles;
            currentIndex = 0;

            buildThumbnails();
            showMedia(0);

            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
            document.body.classList.add('no-scroll');
        }

        function closeModal() {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('no-scroll');

            // Detiene el video al cerrar
            if (mainVideo) {
                mainVideo.src = '';
            }
        }

        function showMedia(index) {
            if (!currentMediaList.length) return;

            if (index < 0) index = currentMediaList.length - 1;
            if (index >= currentMediaList.length) index = 0;

            currentIndex = index;
            const mediaSrc = currentMediaList[currentIndex];

            if (isVideoFile(mediaSrc)) {
                // Extrae el ID y genera el enlace del reproductor de Google
                const fileId = mediaSrc.split('/d/')[1].split('#')[0];
                const iframeSrc = `https://drive.google.com/file/d/${fileId}/preview`;

                if (mainImg) mainImg.style.display = 'none';
                if (videoContainer) videoContainer.style.display = 'block';
                if (mainVideo) {
                    mainVideo.src = iframeSrc;
                }
            } else {
                if (videoContainer) videoContainer.style.display = 'none';
                if (mainVideo) mainVideo.src = ''; 
                if (mainImg) {
                    mainImg.style.display = 'block';
                    mainImg.src = mediaSrc;
                }
            }

            if (prevBtn) {
                prevBtn.style.display = currentMediaList.length > 1 ? 'flex' : 'none';
                prevBtn.style.visibility = currentMediaList.length > 1 ? 'visible' : 'hidden';
            }
            if (nextBtn) {
                nextBtn.style.display = currentMediaList.length > 1 ? 'flex' : 'none';
                nextBtn.style.visibility = currentMediaList.length > 1 ? 'visible' : 'hidden';
            }

            const thumbs = thumbnailsContainer?.querySelectorAll('.thumb-item');
            thumbs?.forEach((t, i) => {
                t.classList.toggle('active', i === currentIndex);
            });
        }

        function buildThumbnails() {
            if (!thumbnailsContainer) return;
            thumbnailsContainer.innerHTML = '';

            if (currentMediaList.length <= 1) {
                thumbnailsContainer.style.display = 'none';
                return;
            }

            thumbnailsContainer.style.display = 'flex';

            currentMediaList.forEach((src, idx) => {
                const thumbDiv = document.createElement('div');
                thumbDiv.className = `thumb-item ${idx === 0 ? 'active' : ''}`;

                if (isVideoFile(src)) {
                    // Crea un ícono elegante de Play para las miniaturas de video
                    thumbDiv.innerHTML = `<div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#1A1A1A; color:var(--accent); font-size:1.2rem;">▶</div>`;
                } else {
                    const imgEl = document.createElement('img');
                    imgEl.src = src;
                    imgEl.alt = `Miniatura ${idx + 1}`;
                    thumbDiv.appendChild(imgEl);
                }

                thumbDiv.addEventListener('click', () => showMedia(idx));
                thumbnailsContainer.appendChild(thumbDiv);
            });
        }

        projectCards.forEach(card => {
            card.addEventListener('click', () => openModal(card));
        });

        closeBtn?.addEventListener('click', closeModal);
        backdrop?.addEventListener('click', closeModal);
        prevBtn?.addEventListener('click', () => showMedia(currentIndex - 1));
        nextBtn?.addEventListener('click', () => showMedia(currentIndex + 1));

        document.addEventListener('keydown', function (e) {
            if (!modal.classList.contains('active')) return;
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowLeft') showMedia(currentIndex - 1);
            if (e.key === 'ArrowRight') showMedia(currentIndex + 1);
        });
    }

    function initContactForm() {
        const form = document.getElementById('contact-form');
        const statusDiv = document.getElementById('form-status');

        if (!form) return;

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const submitBtn = form.querySelector('.submit-btn');
            const btnText = form.querySelector('.btn-text');

            if (submitBtn) submitBtn.disabled = true;
            if (btnText) btnText.innerText = 'Enviando...';

            const formData = new FormData(form);

            fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    if (statusDiv) {
                        statusDiv.className = 'form-status success';
                        statusDiv.innerText = '¡Gracias! Tu mensaje ha sido enviado correctamente.';
                        statusDiv.style.display = 'block';
                    }
                    form.reset();
                } else {
                    throw new Error('Formspree response not ok');
                }
            }).catch(() => {
                if (statusDiv) {
                    statusDiv.className = 'form-status error';
                    statusDiv.innerText = 'Ocurrió un problema al enviar el mensaje. Inténtalo de nuevo o contáctanos directamente.';
                    statusDiv.style.display = 'block';
                }
            }).finally(() => {
                if (submitBtn) submitBtn.disabled = false;
                if (btnText) btnText.innerText = 'Enviar Mensaje';
            });
        });
    }

})();
