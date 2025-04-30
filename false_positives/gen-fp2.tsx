  if (packageContexture === PackageContexture.Dependencies) {
    columns.push(
      {
        accessorKey: 'dependentsCount',
        colType: ColTypes.NUMBER,
        header: () => <FM defaultMessage="Dependents" />,
        enableSorting: true,
      },
