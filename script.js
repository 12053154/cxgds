document.addEventListener("DOMContentLoaded", function() {
    // 加载JSON数据
    fetch('chapters.json')
        .then(response => response.json())
        .then(chapters => {
            const chapterList = document.getElementById('chapters');
            const chapterContent = document.getElementById('chapter-content');

            chapters.forEach(chapter => {
                const listItem = document.createElement('li');
                listItem.textContent = chapter.title;
                listItem.onclick = () => chapterContent.textContent = chapter.content;
                chapterList.appendChild(listItem);
            });

            // 初始加载第一章
            chapterContent.textContent = chapters[0].content;
        })
        .catch(error => console.error('Error:', error));
});
