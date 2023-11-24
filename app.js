Vue.component('picture-card', {
    props: ['title', 'picture_url'],
    template: '#template-picture'
});

const app = new Vue({
    el: '#app',
    data: {
        pictures: [
            { id: 1, title: 'SALSA', picture_url: 'https://megusta.do/storage/32000/20254/a8c7bd5f1f76f2a9efae392eafdffe50.jpg' },
            { id: 2, title: 'BACHATA', picture_url: 'https://i.pinimg.com/originals/87/88/c4/8788c4273fed3452309a2a8e1236a75c.jpg' },
            { id: 3, title: 'MERENGUE', picture_url: 'https://www.lookoutpro.com/wp-content/uploads/2023/11/iStock-509928632-1170x700.jpg' }
        ]
    }
});
