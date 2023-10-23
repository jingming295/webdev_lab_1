class Biodata
{
    constructor()
    {
        document.addEventListener('DOMContentLoaded', () =>
        {
            this.init();
        });
    }

    /**
     * Init website
     */
    init()
    {
        const body = document.body;

        const wrapper = document.createElement('div');
        const tableWrapper = document.createElement('div');
        const table = document.createElement('table');

        const rows = [];

        for (let i = 1; i <= 17; i++)
        {
            const tr = document.createElement('tr');
            rows.push(tr);
        }

        const nameTitle = document.createElement('td');
        const religionTitle = document.createElement('td');
        const raceTitle = document.createElement('td');
        const addressTitle = document.createElement('td');
        const contactTitle = document.createElement('td');
        const courseTitle = document.createElement('td');
        const programmeSkillsTitle = document.createElement('td');
        const personalInterestTitle = document.createElement('td');
        const planTitle = document.createElement('td');
        const dateOfBirthTitle = document.createElement('td');
        const name = document.createElement('td');
        const photo = document.createElement('td');
        const birthDay = document.createElement('td');
        const religion = document.createElement('td');
        const race = document.createElement('td');
        const coursenIns = document.createElement('td');
        const programmeSkills = document.createElement('td');
        const personalInterest = document.createElement('td');
        const plan = document.createElement('td');
        const address_street = document.createElement('td');
        const address_town = document.createElement('td');
        const address_district = document.createElement('td');
        const address_state = document.createElement('td');
        const street = document.createElement('td');
        const town = document.createElement('td');
        const district = document.createElement('td');
        const state = document.createElement('td');
        const contact_mp = document.createElement('td');
        const contact_socialmedia = document.createElement('td');
        const contact_website = document.createElement('td');
        const mp = document.createElement('td');
        const socialmedia = document.createElement('td');
        const socialmediaLink = document.createElement('a');
        const website = document.createElement('td');
        const websiteLink = document.createElement('a');

        wrapper.style.display = 'flex';
        wrapper.style.flexDirection = 'row';
        wrapper.style.justifyContent = 'center';
        wrapper.style.alignItems = 'center';
        wrapper.style.height = '100%';
        wrapper.style.width = '100%';
        tableWrapper.style.display = 'flex';
        tableWrapper.style.flexDirection = 'column';
        table.style.backgroundColor = 'white';
        table.style.borderCollapse = 'collapse';
        table.style.width = '100%';
        table.style.opacity = 0;
        nameTitle.innerHTML = 'Name';
        nameTitle.colSpan = 1;
        dateOfBirthTitle.innerHTML = 'Date Of Birth';
        religionTitle.innerHTML = 'Religion';
        raceTitle.innerHTML = 'Race';
        addressTitle.innerHTML = 'Address';
        addressTitle.rowSpan = 5;
        contactTitle.innerHTML = 'Contact';
        contactTitle.rowSpan = 4;
        courseTitle.innerHTML = 'Course and Institution';
        programmeSkillsTitle.innerHTML = 'Programming skills';
        personalInterestTitle.innerHTML = 'Personal Interest';
        personalInterest.colSpan = 2;
        planTitle.innerHTML = 'Future plan in 2024';
        name.innerHTML = 'Goh Jing Ming';
        photo.colSpan = 1;
        const photoImg = document.createElement('img');
        photoImg.style.maxWidth = '50%';
        photoImg.src = `data:image/png;base64,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`;
        photo.appendChild(photoImg);

        birthDay.innerHTML = '2000/05/15';
        birthDay.colSpan = 2;
        religion.innerHTML = 'Buddha';
        religion.colSpan = 2;
        race.innerHTML = 'Chinese';
        race.colSpan = 2;
        coursenIns.innerHTML = 'Web Development';
        coursenIns.colSpan = 2;
        programmeSkills.innerHTML = 'TypeScript, Javascript, HTML, CSS, NodeJs, php'; 4;
        programmeSkills.colSpan = 2;
        personalInterest.innerHTML = 'NodeJs';
        plan.innerHTML = 'Every day commit in github';
        plan.colSpan = 2;

        address_street.innerHTML = 'Street';
        address_town.innerHTML = 'Town';
        address_district.innerHTML = 'District';
        address_state.innerHTML = 'State';

        street.innerHTML = 'Kampung Baru';
        town.innerHTML = 'Tangkak';
        district.innerHTML = 'Tangkak';
        state.innerHTML = 'Johor';


        contact_mp.innerHTML = 'Mobile Phone';
        contact_socialmedia.innerHTML = 'Social Media';
        contact_website.innerHTML = 'Website';
        mp.innerHTML = '0112641****';
        socialmedia.innerHTML = '<a href="https://github.com/jingming295" target="_blank">https://github.com/jingming295</a>';

        socialmediaLink.href = 'https://github.com/jingming295';
        socialmediaLink.target = '_blank';
        socialmediaLink.textContent = 'https://github.com/jingming295';
        socialmediaLink.style.color = 'blue';
        socialmediaLink.style.textDecoration = 'none';
        socialmedia.innerHTML = '';
        socialmedia.appendChild(socialmediaLink);

        website.innerHTML = '<a href="https://github.com/jingming295" target="_blank">https://github.com/jingming295</a>';

        websiteLink.href = 'https://github.com/jingming295';
        websiteLink.target = '_blank';
        websiteLink.textContent = 'https://github.com/jingming295';
        websiteLink.style.color = 'blue';
        websiteLink.style.textDecoration = 'none';
        website.innerHTML = '';
        website.appendChild(websiteLink);


        const elements = [
            [nameTitle, name, photo],
            [dateOfBirthTitle, birthDay],
            [religionTitle, religion],
            [raceTitle, race],
            [addressTitle],
            [address_street, street],
            [address_town, town],
            [address_district, district],
            [address_state, state],
            [contactTitle],
            [contact_mp, mp],
            [contact_website, website],
            [contact_socialmedia, socialmedia],
            [courseTitle, coursenIns],
            [programmeSkillsTitle, programmeSkills],
            [personalInterestTitle, personalInterest],
            [planTitle, plan]
        ];

        for (let i = 0; i < elements.length; i++)
        {
            for (let j = 0; j < elements[i].length; j++)
            {
                rows[i].appendChild(elements[i][j]);
            }
        }
        rows.forEach(row =>
        {
            table.appendChild(row);
        });
        wrapper.appendChild(tableWrapper);
        tableWrapper.appendChild(table);
        body.appendChild(wrapper);
        const tds = document.querySelectorAll('tr td');
        tds.forEach(td =>
        {
            td.style.border = '2px solid #ccc';
            td.style.padding = '10px';
            td.style.textAlign = 'center';
            td.style.verticalAlign = 'middle';
            td.style.minWidth = '100px';
            td.style.maxWidth = '200px';
            td.style.wordWrap = 'break-word';
            td.style.overflow = 'hidden';
            td.style.borderRadius = '10px';
            td.style.fontFamily = 'Arial, sans-serif';
            td.style.fontSize = '15px';
            td.style.fontWeight = 'bold';
        });

        // 使用requestAnimationFrame来实现动画效果
        let opacity = 0;
        function fadeIn()
        {
            opacity += 0.008;
            table.style.opacity = opacity;
            if (opacity < 1)
            {
                requestAnimationFrame(fadeIn);
            }
        }
        requestAnimationFrame(fadeIn);
    }
}

const index = new Biodata();
