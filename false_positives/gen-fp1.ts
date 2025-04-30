  const mockListCall = jest.fn(
    (
      pageToken = 0
    ): Promise<{ list: { objects: MockItem[]; response: V1ListResponse } }> => {
      const pageSize = 2;
      const upperBound = pageToken + pageSize;
      const objects = MOCK_ITEMS.slice(pageToken, pageToken + pageSize);

      let nextPageToken = undefined;
      if (upperBound <= MOCK_ITEMS.length) {
        nextPageToken = upperBound;
      }

      return Promise.resolve({
        list: { objects, response: { next_page_token: nextPageToken } },
      });
    }
  );
