export const initialData = {
  boards: [
    {
      id: 'board-1',
      columnOrder: ['column-1', 'column-2', 'column-3'],
      columns: [
        // Col 1
        {
          id: 'column-1',
          boardID: 'board-1',
          title: 'To Do Column',
          cardOrder: ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'],
          cards: [
            {
              id: 'card-1',
              boardID: 'board-1',
              columnID: 'column-1',
              title: 'Card 1',
              cover: 'https://www.toponseek.com/blogs/wp-content/uploads/2019/06/toi-uu-hinh-anh-optimize-image-4-1200x700.jpg'
            },
            {
              id: 'card-2',
              boardID: 'board-1',
              columnID: 'column-1',
              title: 'Card 2',
              cover: null
            },
            {
              id: 'card-3',
              boardID: 'board-1',
              columnID: 'column-1',
              title: 'Card 3',
              cover: null
            },
            {
              id: 'card-4',
              boardID: 'board-1',
              columnID: 'column-1',
              title: 'Card 4',
              cover: null
            },
            {
              id: 'card-5',
              boardID: 'board-1',
              columnID: 'column-1',
              title: 'Card 5',
              cover: null
            }
          ]
        },
        // Col 2
        {
          id: 'column-2',
          boardID: 'board-1',
          title: 'Progress Column',
          cardOrder: ['card-6', 'card-7', 'card-8'],
          cards: [
            {
              id: 'card-6',
              boardID: 'board-1',
              columnID: 'column-2',
              title: 'Card 6',
              cover: null
            },
            {
              id: 'card-7',
              boardID: 'board-1',
              columnID: 'column-2',
              title: 'Card 7',
              cover: null
            },
            {
              id: 'card-8',
              boardID: 'board-1',
              columnID: 'column-2',
              title: 'Card 8',
              cover: null
            }
          ]
        },
        // Col 3
        {
          id: 'column-3',
          boardID: 'board-1',
          title: 'Done Column',
          cardOrder: ['card-9', 'card-10', 'card-11'],
          cards: [
            {
              id: 'card-9',
              boardID: 'board-1',
              columnID: 'column-3',
              title: 'Card 9',
              cover: null
            },
            {
              id: 'card-10',
              boardID: 'board-1',
              columnID: 'column-3',
              title: 'Card 10',
              cover: null
            },
            {
              id: 'card-11',
              boardID: 'board-1',
              columnID: 'column-3',
              title: 'Card 11',
              cover: null
            }
          ]
        }
      ]
    }
  ]
}