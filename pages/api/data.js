export default function handler(req, res) {
    const data = [
        {
            id: 1,
            title: 'Title 1',
            description: 'Description 1',
            image: 'https://dummyimage.com/200x200/000000/ffffff',
        },
        {
            id: 2,
            title: 'Title 2',
            description: 'Description 2',
            image: 'https://dummyimage.com/200x200/000000/ffffff',
        },
        {
            id: 3,
            title: 'Title 3',
            description: 'Description 3',
            image: 'https://dummyimage.com/200x200/000000/ffffff',
        },
        {
            id: 4,
            title: 'Title 4',
            description: 'Description 4',
            image: 'https://dummyimage.com/200x200/000000/ffffff',
        },
        {
            id: 5,
            title: 'Title 5',
            description: 'Description 5',
            image: 'https://dummyimage.com/200x200/000000/ffffff',
        },
        {
            id: 6,
            title: 'Title 6',
            description: 'Description 6',
            image: 'https://dummyimage.com/200x200/000000/ffffff',
        },
        {
            id: 7,
            title: 'Title 7',
            description: 'Description 7',
            image: 'https://dummyimage.com/200x200/000000/ffffff',
        },
        {
            id: 8,
            title: 'Title 8',
            description: 'Description 8',
            image: 'https://dummyimage.com/200x200/000000/ffffff',
        },
        {
            id: 9,
            title: 'Title 9',
            description: 'Description 9',
            image: 'https://dummyimage.com/200x200/000000/ffffff',
        },
        {
            id: 10,
            title: 'Title 10',
            description: 'Description 10',
            image: 'https://dummyimage.com/200x200/000000/ffffff',
        },
        {
            id: 11,
            title: 'Title 11',
            description: 'Description 11',
            image: 'https://dummyimage.com/200x200/000000/ffffff',
        },
        {
            id: 12,
            title: 'Title 12',
            description: 'Description 12',
            image: 'https://dummyimage.com/200x200/000000/ffffff',
        },
        {
            id: 13,
            title: 'Title 13',
            description: 'Description 13',
            image: 'https://dummyimage.com/200x200/000000/ffffff',
        },
        {
            id: 14,
            title: 'Title 14',
            description: 'Description 14',
            image: 'https://dummyimage.com/200x200/000000/ffffff',
        },
        {
            id: 15,
            title: 'Title 15',
            description: 'Description 15',
            image: 'https://dummyimage.com/200x200/000000/ffffff',
        },
        {
            id: 16,
            title: 'Title 16',
            description: 'Description 16',
            image: 'https://dummyimage.com/200x200/000000/ffffff',
        },
        {
            id: 17,
            title: 'Title 17',
            description: 'Description 17',
            image: 'https://dummyimage.com/200x200/000000/ffffff',
        },
        {
            id: 18,
            title: 'Title 18',
            description: 'Description 18',
            image: 'https://dummyimage.com/200x200/000000/ffffff',
        },
        {
            id: 19,
            title: 'Title 19',
            description: 'Description 19',
            image: 'https://dummyimage.com/200x200/000000/ffffff',
        },
        {
            id: 20,
            title: 'Title 20',
            description: 'Description 20',
            image: 'https://dummyimage.com/200x200/000000/ffffff',
        }
    ];


    const { page, pageSize } = req.query;

    const start = (page - 1) * pageSize;
    const end = page * pageSize;

    const pageData = data.slice(start, end);

    res.status(200).json(pageData);
}
