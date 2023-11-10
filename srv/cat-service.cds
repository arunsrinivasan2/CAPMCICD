using {Northwind as external} from './external/Northwind.csn' ;
service CatalogService {
    @readOnly
    entity Products as projection on external.Products {
        key ID,Name,Description,ReleaseDate,DiscontinuedDate,Rating,Price
    };
}