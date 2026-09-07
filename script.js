/* ==========================================================================
   CONCEPTO & FORMA - ESTUDIO DE ARQUITECTURA Y DISEÑO
   Lógica e Interactividad JavaScript v5.2
   ========================================================================== */

(function () {
    'use strict';

    // BASE DE DATOS COMPLETA DE RECURSOS POR PROYECTO (IMÁGENES Y VIDEOS)
    const projectsGallery = {
        '01_oficina_204': [
            'Galeria_Proyectos_CF/01_oficina_204/oficina_204_1.jpg',
            'Galeria_Proyectos_CF/01_oficina_204/oficina_204_2.jpg',
            'Galeria_Proyectos_CF/01_oficina_204/oficina_204_3.jpg',
            'Galeria_Proyectos_CF/01_oficina_204/oficina_204_4.jpg'
        ],
        '02_oficina_801': [
            'Galeria_Proyectos_CF/02_oficina_801/oficina801-recepcion.jpeg',
            'Galeria_Proyectos_CF/02_oficina_801/Oficina801-oficinaprincipal2.jpg',
            'Galeria_Proyectos_CF/02_oficina_801/Oficina801-recepcion4.jpg',
            'Galeria_Proyectos_CF/02_oficina_801/Videofinal-801.mp4',
            'Galeria_Proyectos_CF/02_oficina_801/Oficina801-detalles1.jpg',
            'Galeria_Proyectos_CF/02_oficina_801/Oficina801-detalles2.jpg',
            'Galeria_Proyectos_CF/02_oficina_801/Oficina801-detalles3.jpg',
            'Galeria_Proyectos_CF/02_oficina_801/Oficina801-detalles4.jpg',
            'Galeria_Proyectos_CF/02_oficina_801/Oficina801-detalles5.jpg',
            'Galeria_Proyectos_CF/02_oficina_801/Oficina801-oficinaprincipal1.jpg',
            'Galeria_Proyectos_CF/02_oficina_801/Oficina801-oficinaprincipal3.jpg',
            'Galeria_Proyectos_CF/02_oficina_801/Oficina801-saladejuntas1.jpg',
            'Galeria_Proyectos_CF/02_oficina_801/Oficina801-saladejuntas2.jpg',
            'Galeria_Proyectos_CF/02_oficina_801/Oficina801-saladejuntas3.jpg',
            'Galeria_Proyectos_CF/02_oficina_801/Oficina801-saladejuntas4.jpg',
            'Galeria_Proyectos_CF/02_oficina_801/Oficina801-saladejuntas5.jpg'
        ],
        '03_marca_cafe_amor_de_mujer': [
            'Galeria_Proyectos_CF/03_marca_cafe_amor_de_mujer/Cafe_amo_de_mujer_01.jpg'
        ],
        '04_marca_mercamio_chia': [
            'Galeria_Proyectos_CF/04_marca_mercamio_chia/Mercamio-chia-02.jpg',
            'Galeria_Proyectos_CF/04_marca_mercamio_chia/Mercamio-chia-01.mp4'
        ],
        '05_proyecto_80': [
            'Galeria_Proyectos_CF/05_proyecto_80/Mercamio80_19.jpeg',
            'Galeria_Proyectos_CF/05_proyecto_80/Mercamio80_01.jpeg',
            'Galeria_Proyectos_CF/05_proyecto_80/Mercamio80_02.jpeg',
            'Galeria_Proyectos_CF/05_proyecto_80/Mercamio80_03.jpeg',
            'Galeria_Proyectos_CF/05_proyecto_80/Mercamio80_04.MOV',
            'Galeria_Proyectos_CF/05_proyecto_80/Mercamio80_05.MOV',
            'Galeria_Proyectos_CF/05_proyecto_80/Mercamio80_06.MOV',
            'Galeria_Proyectos_CF/05_proyecto_80/Mercamio80_08.MOV',
            'Galeria_Proyectos_CF/05_proyecto_80/Mercamio80_09.MOV',
            'Galeria_Proyectos_CF/05_proyecto_80/Mercamio80_10.MOV',
            'Galeria_Proyectos_CF/05_proyecto_80/Mercamio80_11.MOV',
            'Galeria_Proyectos_CF/05_proyecto_80/Mercamio80_20.jpeg',
            'Galeria_Proyectos_CF/05_proyecto_80/Mercamio80_21.jpeg',
            'Galeria_Proyectos_CF/05_proyecto_80/Mercamio80_22.jpeg',
            'Galeria_Proyectos_CF/05_proyecto_80/Mercamio80_23.jpeg'
        ],
        '06_casa_campestre': [
            'Galeria_Proyectos_CF/06_casa_campestre/Casa-campestre-01.png',
            'Galeria_Proyectos_CF/06_casa_campestre/Casa-campestre-02.png',
            'Galeria_Proyectos_CF/06_casa_campestre/Casa-campestre-03.jpg',
            'Galeria_Proyectos_CF/06_casa_campestre/Casa-campestre-04.png'
        ],
        '07_rigarchem': [
            'Galeria_Proyectos_CF/07_rigarchem/Rigarchem-01.jpg',
            'Galeria_Proyectos_CF/07_rigarchem/Rigarchem-02.jpg',
            'Galeria_Proyectos_CF/07_rigarchem/Rigarchem-03.jpg',
            'Galeria_Proyectos_CF/07_rigarchem/Rigarchem-04.jpg'
        ],
        '08_casas_residenciales': [
            'Galeria_Proyectos_CF/08_casas_residenciales/interiorismo-3.jpg',
            'Galeria_Proyectos_CF/08_casas_residenciales/interiorismo-2.jpg',
            'Galeria_Proyectos_CF/08_casas_residenciales/interiorismo-4.jpg',
            'Galeria_Proyectos_CF/08_casas_residenciales/interiorismo-5.jpg',
            'Galeria_Proyectos_CF/08_casas_residenciales/interiorismo-6.jpg',
            'Galeria_Proyectos_CF/08_casas_residenciales/casa-resiedencial-hanbitacion.jpg'
        ],
        '09_cocinas_integrales': [
            'Galeria_Proyectos_CF/09_cocinas_integrales/casa-residencial-cocina-5.jpg',
            'Galeria_Proyectos_CF/09_cocinas_integrales/casa-residencial-cocina-1.jpg',
            'Galeria_Proyectos_CF/09_cocinas_integrales/casa-residencial-cocina-4.jpg',
            'Galeria_Proyectos_CF/09_cocinas_integrales/casa-resiedencial-cocina-2.jpg',
            'Galeria_Proyectos_CF/09_cocinas_integrales/casa-resiedencial-cocina-3.jpg'
        ],
        '10_iluminacion_arquitectonica': [
            'Galeria_Proyectos_CF/10_Iluminacion-arquitectonica/Iluminacion_02.jpeg',
            'Galeria_Proyectos_CF/10_Iluminacion-arquitectonica/Iluminacion_04.jpeg',
            'Galeria_Proyectos_CF/10_Iluminacion-arquitectonica/Iluminacion_05.jpeg',
            'Galeria_Proyectos_CF/10_Iluminacion-arquitectonica/Iluminacion_01.MOV',
            'Galeria_Proyectos_CF/10_Iluminacion-arquitectonica/Iluminacion_03.mov'
        ],
        '11_mobiliario': [
            'Galeria_Proyectos_CF/11_Mobiliario/Mobiliario_04.jpg',
            'Galeria_Proyectos_CF/11_Mobiliario/Mobiliario_01.jpg',
            'Galeria_Proyectos_CF/11_Mobiliario/Mobiliario_02.jpg',
            'Galeria_Proyectos_CF/11_Mobiliario/Mobiliario_03.jpg',
            'Galeria_Proyectos_CF/11_Mobiliario/Mobiliario_05.jpg'
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
    projectsGallery['10_Diseño de iluminación arquitectónica'] = projectsGallery['10_iluminacion_arquitectonica'];
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
            const ext = src.split('.').pop().toLowerCase();
            return ['mp4', 'mov', 'webm', 'ogg'].includes(ext);
        }

        function openModal(card) {
            const projectKey = card.getAttribute('data-project');
            const title = card.getAttribute('data-title') || card.querySelector('.project-title')?.innerText;
            const category = card.getAttribute('data-subtitle') || card.querySelector('.project-cat')?.innerText;
            const desc = card.getAttribute('data-desc') || '';

            if (titleEl) titleEl.innerText = title;
            if (catEl) catEl.innerText = category;
            if (descEl) descEl.innerText = desc;

            let mediaFiles = projectsGallery[projectKey] ||
                             (projectKey ? projectsGallery[projectKey.replace(/-/g, '_')] : null) ||
                             (projectKey ? projectsGallery[projectKey.replace(/_/g, '-')] : null) ||
                             (projectKey && projectKey.includes('801') ? projectsGallery['02_oficina_801'] : null) ||
                             (projectKey && projectKey.includes('80') ? projectsGallery['05_proyecto_80'] : null);

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

            if (mainVideo) {
                mainVideo.pause();
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
                if (mainImg) mainImg.style.display = 'none';
                if (videoContainer) videoContainer.style.display = 'block';
                if (mainVideo) {
                    mainVideo.src = mediaSrc;
                    mainVideo.play().catch(() => {});
                }
            } else {
                if (videoContainer) videoContainer.style.display = 'none';
                if (mainVideo) mainVideo.pause();
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
                    const videoEl = document.createElement('video');
                    videoEl.src = src;
                    videoEl.muted = true;
                    thumbDiv.appendChild(videoEl);
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
