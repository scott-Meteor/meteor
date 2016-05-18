Posts = new orion.collection('posts', {
    singularName: 'post', // The name of one of these items
    pluralName: 'posts', // The name of more than one of these items
    title: 'posts', // The title in the index of the collection
    link: {
        /**
         * The text that you want to show in the sidebar.
         * The default value is the name of the collection, so
         * in this case it is not necessary.
         */
        title: 'Posts'
    },
    /**
     * Tabular settings for this collection
     */
    tabular: {
        columns: [
            { data: "title", title: "Title" },
            /**
             * If you want to show a custom orion attribute in
             * the index table you must call this function
             * orion.attributeColumn(attributeType, key, label, options)
             */
            orion.attributeColumn('file', 'image', 'Image'),
            orion.attributeColumn('summernote', 'body', 'Content', { orderable: true }), // makes it searchable
            orion.attributeColumn('createdBy', 'createdBy', 'Created By')
        ]
    }
});